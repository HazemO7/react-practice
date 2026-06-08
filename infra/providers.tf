provider "aws" {
    region = "eu-west-1" 
}

terraform {
  backend "s3" {
    bucket = "digilians-tfstate"
    key = "infra/terraform.tfstate"
    region = "eu-west-1"
  }
}
