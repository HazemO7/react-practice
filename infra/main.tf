resource "aws_vpc" "main" {
  cidr_block       = var.vpc_cidr_block
  instance_tenancy = "default"

  tags = {
    Name = var.vpc_name
  }
}
// subnet
resource "aws_subnet" "subnet_hazem" {
  vpc_id = aws_vpc.main.id
  cidr_block = var.subnet_cidr_block
  availability_zone = "eu-west-1a"
   map_public_ip_on_launch = true
    tags = {
      Name = var.subnet_name
    }
}
// route table
resource "aws_route_table" "route_table_hazem" {
  vpc_id = aws_vpc.main.id
  tags = {
    Name = "route_table_hazem"
  }
}
// route table association
resource "aws_route_table_association" "route_table_association_hazem" {
  subnet_id = aws_subnet.subnet_hazem.id
  route_table_id = aws_route_table.route_table_hazem.id
}


// internet gateway
resource "aws_internet_gateway" "igw_hazem" {
  vpc_id = aws_vpc.main.id
  tags = {
    Name = "igw_hazem"
  }
}
// route to internet
resource "aws_route" "internet_access" {
  route_table_id         = aws_route_table.route_table_hazem.id
  destination_cidr_block = "0.0.0.0/0"
  gateway_id             = aws_internet_gateway.igw_hazem.id
}

