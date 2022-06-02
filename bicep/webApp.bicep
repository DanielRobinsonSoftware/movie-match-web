param appInsightsName string
param hostingPlanName string
param webAppName string
param webAppNameStaging string
param location string

resource appInsights 'Microsoft.Insights/components@2020-02-02' = {
  name: appInsightsName
  location: location
  kind: 'web'
  properties: {
    Application_Type: 'web'
  }
}

resource hostingPlan 'Microsoft.Web/serverfarms@2021-01-15' = {
  name: hostingPlanName
  location: location
  kind: 'linux'
  sku: {
    name: 'F1' 
    tier: 'Free'
  }
  properties:{
    reserved: true
  }
}

resource webApp 'Microsoft.Web/sites@2021-01-15' = {
  name: webAppName
  location: location
  kind: 'app,linux'
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    httpsOnly: true
    serverFarmId: hostingPlan.id
    clientAffinityEnabled: true
    siteConfig: {
      appSettings: []
      linuxFxVersion: 'NODE:16-lts'
    }
  }

  dependsOn: [
    appInsights
  ]
}

resource webAppStagingSlot 'Microsoft.Web/sites/slots@2021-02-01' = {
  name: webAppNameStaging
  location: location
  kind: 'app,linux'
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    httpsOnly: true
    serverFarmId: hostingPlan.id
    clientAffinityEnabled: true
    siteConfig: {

    }
  }

  dependsOn: [
    webApp
  ]
}

output tenantId string = webApp.identity.tenantId
output principalId string = webApp.identity.principalId
output stagingTenantId string = webAppStagingSlot.identity.tenantId
output stagingPrincipalId string = webAppStagingSlot.identity.principalId
output appInsightsKey string = appInsights.properties.InstrumentationKey
