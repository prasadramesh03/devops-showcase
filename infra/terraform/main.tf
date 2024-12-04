provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "devops_showcase" {
  name     = "devops-showcase-rg"
  location = "eastus"
}

resource "azurerm_kubernetes_cluster" "cluster" {
  name                = "devops-showcase-aks"
  location            = azurerm_resource_group.devops_showcase.location
  resource_group_name = azurerm_resource_group.devops_showcase.name
  dns_prefix          = "devopsshowcase"

  default_node_pool {
    name       = "default"
    node_count = 2
    vm_size    = "Standard_B2s"
  }

  identity {
    type = "SystemAssigned"
  }
}