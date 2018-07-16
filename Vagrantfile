# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  # The most common configuration options are documented and commented below.
  # For a complete reference, please see the online documentation at
  # https://docs.vagrantup.com.

  # Every Vagrant development environment requires a box. You can search for
  # boxes at https://vagrantcloud.com/search.
  config.vm.box = "bento/centos-7.4"

  # Disable automatic box update checking. If you disable this, then
  # boxes will only be checked for updates when the user runs
  # `vagrant box outdated`. This is not recommended.
  # config.vm.box_check_update = false

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080

  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine and only allow access
  # via 127.0.0.1 to disable public access
  config.vm.network "forwarded_port", guest: 9080, host: 8080, host_ip: "127.0.0.1"
  config.vm.network "forwarded_port", guest: 9443, host: 8443, host_ip: "127.0.0.1"

  # Create a private network, which allows host-only access to the machine
  # using a specific IP.
  # config.vm.network "private_network", ip: "192.168.33.10"

  # Create a public network, which generally matched to bridged network.
  # Bridged networks make the machine appear as another physical device on
  # your network.
  # config.vm.network "public_network"

  # Share an additional folder to the guest VM. The first argument is
  # the path on the host to the actual folder. The second argument is
  # the path on the guest to mount the folder. And the optional third
  # argument is a set of non-required options.
  #config.vm.synced_folder "data", "/home/vagrant"

  # Provider-specific configuration so you can fine-tune various
  # backing providers for Vagrant. These expose provider-specific options.
  # Example for VirtualBox:
  #
  # config.vm.provider "virtualbox" do |vb|
  #   # Display the VirtualBox GUI when booting the machine
  #   vb.gui = true
  #
  #   # Customize the amount of memory on the VM:
  #   vb.memory = "1024"
  # end
  #
  # View the documentation for the provider you are using for more
  # information on available options.

  # Enable provisioning with a shell script. Additional provisioners such as
  # Puppet, Chef, Ansible, Salt, and Docker are also available. Please see the
  # documentation for more information about their specific syntax and use.

   config.vm.provision "shell", inline: <<-SHELL
    yes | sudo yum check-update
    yes | sudo curl -fsSL https://get.docker.com/ | sh
    sudo systemctl start docker
    sudo systemctl enable docker
    sudo docker pull evolvedbinary/exist-db:eXist-4.3.0
  SHELL
    config.vm.provision "shell", inline: "sudo docker run -d -it -p 9080:8080 -p 9443:8443 evolvedbinary/exist-db:eXist-4.3.0", run: "always"
end


=begin
    yes | sudo yum upgrade
    yes | sudo yum update
    

    wget https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tgz
    tar -xzf Python-3.7.0.tgz
    cd Python-3.7.0
    yes | sudo yum install yum-utils make
    yes | sudo yum-builddep python
    ./configure
    make
    sudo make install
    rm -rf Python-3.7.0
    rm -rf Python-3.7.0.tgz
    python3 -m pip install --upgrade pip
    python3 -m venv venv 

=end