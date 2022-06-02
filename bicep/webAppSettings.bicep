param webAppName string

@secure()
param appInsightsKey string
@secure()
param identityTenantId string
@secure()
param identityClientId string

param storageAccountName string
param storageAccountId string
param storageAccountApiVersion string

var storageAccountConnectionString = 'DefaultEndpointsProtocol=https;AccountName=${storageAccountName};EndpointSuffix=${environment().suffixes.storage};AccountKey=${listKeys(storageAccountId, storageAccountApiVersion).keys[0].value}'

var settingsProperties = {
  APPINSIGHTS_INSTRUMENTATIONKEY: appInsightsKey
  AzureWebJobsStorage: storageAccountConnectionString
  WEBSITE_CONTENTAZUREFILECONNECTIONSTRING: storageAccountConnectionString
  WEBSITE_CONTENTSHARE: webAppName
  AzureADTenantId: identityTenantId
  AzureADClientId: identityClientId
}

resource functionAppSettings 'Microsoft.Web/sites/config@2021-01-15' = {
  name: '${webAppName}/appsettings'
  properties: settingsProperties
}
