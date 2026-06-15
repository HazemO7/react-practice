
# VPC

module "vpc" {
  source = "./modules/VPC"

  vpc_name             = "hazem-vpc"
  vpc_cidr_block       = "10.0.0.0/16"

  public_subnet_1_cidr = "10.0.1.0/24"
  public_subnet_2_cidr = "10.0.2.0/24"

  az_1 = "eu-west-1a"
  az_2 = "eu-west-1b"
}


# ALB
module "alb" {
  source = "./modules/ALB"

  alb_name          = "hazem-alb"
  vpc_id            = module.vpc.vpc_id
  security_group_id = module.vpc.security_group_id

  subnet_ids = [
    module.vpc.subnet_1_id,
    module.vpc.subnet_2_id
  ]
}
