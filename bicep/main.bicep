param appNameStaging string
param apiUrlStaging string
param appNameProduction string
param apiUrlProduction string
param location string = resourceGroup().location

var uniqueSuffix = uniqueString(resourceGroup().id)
var globallyUniqueName = toLower('${appNameProduction}${uniqueSuffix}')

// Storage account and keyvault names must be no longer than 24 characters, lowercase and globally unique
var shortLength = min(length(globallyUniqueName), 24)
var shortGloballyUniqueName = substring(globallyUniqueName, 0, shortLength)

module storageAccountModule 'storageAccount.bicep' = {
  name: 'storageAccountModule'
  scope: resourceGroup()
  params: {
    storageAccountName: shortGloballyUniqueName
    location: location
  }
}

module webAppModule 'webApp.bicep' = {
  name: 'webAppModule'
  scope: resourceGroup()
  params: {
    appInsightsName: globallyUniqueName
    hostingPlanName: globallyUniqueName
    appNameStaging: appNameStaging
    appNameProduction: appNameProduction
    location: location
  }
  dependsOn:[
    storageAccountModule
  ]
}

module webAppSettingsModule 'webAppSettings.bicep' = {
  name: 'webAppSettingsModule'
  params: {
    appNameStaging: appNameStaging
    apiUrlStaging: apiUrlStaging
    appNameProduction: appNameProduction
    apiUrlProduction: apiUrlProduction
    appInsightsKey: webAppModule.outputs.appInsightsKey
    identityTenantId: subscription().tenantId
    identityClientId: subscription().subscriptionId
    storageAccountName: shortGloballyUniqueName
    storageAccountId: storageAccountModule.outputs.storageAccountId
    storageAccountApiVersion: storageAccountModule.outputs.storageAccountApiVersion
  }
  dependsOn:[
    webAppModule
    storageAccountModule
  ]
}
