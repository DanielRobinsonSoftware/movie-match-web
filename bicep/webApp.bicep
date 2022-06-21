param appInsightsName string
param hostingPlanName string
param appNameStaging string
param appNameProduction string
param location string

var appNames = [
  {
    appName: appNameStaging
  }
  {
    appName: appNameProduction
  }
]

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


resource webApp 'Microsoft.Web/sites@2021-01-15' = [for appName in appNames: {
  name: '${appName}'
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
}]

output appInsightsKey string = appInsights.properties.InstrumentationKey
