---
title: ROS2 Series #01
description: Learn How to Set-Up & Install ROS2 in Ubuntu via WSL
publishDate: August 2, 2025
date: 2025-08-02
img: "/img/ros2.svg"
tags: ["blog"]
---

## ROS2 - The New Face of Robotics Software
Imagine a software that allows you to program how the robots around you move or work and it's not just about programming any ordinary line-following robot. It’s also about giving them the ability to sense, decide, and act in actual environments. 

ROS2 makes this possible with real-time control, smooth coordination between multiple robots, and flexibility to run on anything, from tiny robot kits to massive industrial robots - entirely reshaping the future of robotics software as we know it.

---

## But Why Use ROS2?

Let's do a small "With v/s Without" comparison for ROS2 to truly understand it's role and usage

| Aspects                    | Without ROS2                                                | With ROS2                                                    |
|----------------------------|-------------------------------------------------------------|-------------------------------------------------------------|
| **Development Efforts**      | each robot must be programmed from scratch, meaning wasting more time.   | provides ready-to-use frameworks, saving time and efforts.   |
| **Communication**           | hard to connect sensors, actuators, and controllers.        | easy real-time communication between all components.    |
| **Scalability**             | difficult to add new robots or features.                    | easily scales to multiple robots and new functionalities.   |
| **Response Time**      | slow decision-making in dynamic environments.               |fast and reliable responses with respect to its surroundings.      |
| **Security & Reliability**  | limited safety and reliability in critical tasks.           | built-in security and dependable operations for any use case.|

---

## Installing WSL for Windows OS

Okay, so let's now talk about some points to keep in mind before installing WSL (Windows Subsystem for Linux) - 
- make sure you have Windows 10 or Higher Version of Windows in your PC
- `virtualization` must be enabled in your ``BIOS`` (already enabled by default, so don't worry)

1. Open Command-Prompt/Terminal and Run the following Command -
    ```
    wsl --install 
    ```
    this will enable WSL and VM as a base platform for installing Ubuntu later ahead, and with this way you'll be able to easily install Ubuntu in your PC.
    
2. For using ROS2-Humble (Hawksbill) in Ubuntu via WSL you'll need to install Ubuntu 22.04, and to     check if it's available online all you'll need to do is run the following command- 
    ```
    wsl --list --online
    wsl --install -d Ubuntu-22.04
    ```
3. After successfully installing Ubuntu 22.04 via WSL, you'll have to open it and set a username + password for Linux, so that you can use it securely when you're in the Ubuntu GUI.

---

## Install ROS2-Humble in Ubuntu 22.04 
Follow the set of below mentioned commands to make sure that your Ubuntu is set-up properly and there are no break-points or fault so that we can smoothly install ROS2 in it.

1. Update Packages -
    ```
    sudo apt update && sudo apt upgrade -y
    ```
2. Set Locale - 
    ```
    sudo apt install locales -y
    sudo locale-gen en_US en_US.UTF-8
    sudo update-locale LC_ALL=en_US.UTF-8 LANG=en_US.UTF-8
    export LANG=en_US.UTF-8
    ```
3. Setup ROS2 Repository -
    ```
    sudo apt install software-properties-common -y
    sudo add-apt-repository universe
    sudo apt update && sudo apt install curl gnupg lsb-release -y
    ```
4. Add ROS2 GPG Key & Repository -
- ROS2 GPG Key
    ```
    sudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg 
    ```
- ROS2 Repository 
    ```
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null
    ```
5. Install ROS2-Humble 
    ```
    sudo apt update
    sudo apt upgrade -y
    sudo apt install ros-humble-desktop -y
    ```
6. Source ROS2 in Every Session
    ```
    echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
    source ~/.bashrc
    ```
    **Congratulations! you just successfully set-up ROS2-Humble in your Ubuntu-22.04 via WSL**
   
---

## Verify Your Installation
We want to make sure that we have successfully installed ROS2 in our Ubuntu-22.04 because if we later try to create a `node` (basically other name for a `file` in ROS2) and it doesn't get created, we'll be totally screwed.

1. Check the ROS2 Distro 
    ```
    echo $ROS_DISTRO
    ```
    if your recieve the output as `humble` then that means you have correctly sourced an Ubuntu-version suitable distro.
    
2. Run a Sample ROS2 Command 
    ```
    wsl -d Ubuntu-22.04
    ros2 run demo_nodes_cpp talker
    ```
    you should see an output somewhat like this - 
    `[INFO] [talker]: Publishing: 'Hello World: 1'`
   
    ---
    then, open another terminal and type the below command - 
    ```
    wsl -d Ubuntu-22.04
    ros2 run demo_nodes_cpp listener
    ```
    you should see an output somewhat like this -
    `[INFO] [listener]: I heard: 'Hello World: 1'`
    
> if this works, your ROS2 Installation is Successfully Completed! Great Work. Now in the upcoming blogs, we'll learn - 
 - How to Create Packages and Nodes within that Packages
 - How to Save, Edit and Run a Sample Node
 - Configuring Console Scripts for the Entry Points in the `setup.py` file 
 - Understanding the Use and Meaning of various Commands in ROS2
   
---
```
Thank You for Reading this Blog! Written by Aayush A. Mishra - August, 2025
```
