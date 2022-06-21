param appNameStaging string
param apiUrlStaging string
param appNameProduction string
param apiUrlProduction string

@secure()
param appInsightsKey string
@secure()
param identityTenantId string
@secure()
param identityClientId string

param storageAccountName string
param storageAccountId string
param storageAccountApiVersion string

var appNamesAndApiUrls = [
  {
    appName: appNameStaging
    apiUrl: apiUrlStaging
  }
  {
    appName: appNameProduction
    apiUrl: apiUrlProduction
  }
]

var storageAccountConnectionString = 'DefaultEndpointsProtocol=https;AccountName=${storageAccountName};EndpointSuffix=${environment().suffixes.storage};AccountKey=${listKeys(storageAccountId, storageAccountApiVersion).keys[0].value}'

resource functionAppSettings 'Microsoft.Web/sites/config@2021-01-15' = [for appNameAndApiUrl in appNamesAndApiUrls: {
  name: '${appNameAndApiUrl.appName}/appsettings'
  properties: {
    APPINSIGHTS_INSTRUMENTATIONKEY: appInsightsKey
    AzureWebJobsStorage: storageAccountConnectionString
    WEBSITE_CONTENTAZUREFILECONNECTIONSTRING: storageAccountConnectionString
    WEBSITE_CONTENTSHARE: appNameAndApiUrl.appName
    AzureADTenantId: identityTenantId
    AzureADClientId: identityClientId
    ApiUrl: appNameAndApiUrl.apiUrl
  }
}]
