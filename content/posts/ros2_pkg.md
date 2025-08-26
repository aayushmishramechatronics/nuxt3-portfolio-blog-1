---
title: ROS2 Series #02
description: Creating a Workspace, and Package with Nodes within the Workspace
publishDate: August 26 2025
date: 2025-08-26
img: "/img/ros2_pkg.svg"
tags: ["blog"]
---

## About this Blog
In the Previous Blog, we learnt how to Install Ubuntu 22.04 via WSL and Setup ROS2 (Humble) Distro inside the Ubuntu 22.04, now - in this blog we will learn:

1. Creating a New Workspace in ROS2 Humble 
2. Creating a New Package in the Workspace 
3. Adding, Editing and Running the Node File created inside the Package
4. A Simple and Basic ROS2 Project as an Example

---
## Opening Ubuntu-22.04 via WSL

Okay, so first things first - we will open our Ubuntu-22.04 via WSL in the Windows Powershell 

1. Open Command-Prompt/Terminal and Run the following Command -
    ```
    PS C:\Users\aayus> wsl -d Ubuntu-22.04
    ```
    this command will tell WSL to boot-up/open the previously installed Ubuntu-22.04 in your PC and after this you'll see an output somewhat like this - 
    ```
    root@DESKTOP-D3IK1O1:/mnt/c/Users/aayus#
    ```

---
## Creating a New Workspace in Ubuntu-22.04 for ROS2
Now we will create a `New Workspace` step-by-step in our Ubuntu-22.04, follow the below lines of code and type it all in the mentioned order -

1. Make New Directory (with `src` folder inside) -
    ```
    mkdir -p ~/sample_ws/src
    ```
2. Change Directory - 
    ```
    cd ~/sample_ws
    ```
3. Initialize and Build the Worskpace -
    ```
    colcon build
    ```
4. Source the Workspace (for ROS2 to find your packages) -
    ```
    source install/setup.bash
    ```
---
## Creating a New Package inside the Workspace for ROS2 (Ament-Type: Python)
After creating a new workspace, we will move on and create a `New Package` inside the workspace that we created just above this section - the package will be built in Python (you can also build your package in C++)

1. Change Directory (back to `src`)
    ```
    cd ~/sample_ws/src
    ```
    
2. Create a New Package (in the sample_ws/src/)
    ```
    ros2 pkg create --build-type ament_python your_pkg_name
    ```
    you should see an output somewhat like this - 
    ```
    going to create a new package
    package name: your_pkg_name
    destination directory: /root/sample_ws/src
    package format: 3
    version: 0.0.0
    description: TODO: Package description
    maintainer: ['root <root@todo.todo>']
    licenses: ['TODO: License declaration']
    build type: ament_python
    dependencies: []
    creating folder ./your_pkg_name
    creating ./your_pkg_name/package.xml
    creating source folder
    creating folder ./your_pkg_name/your_pkg_name
    creating ./your_pkg_name/setup.py
    creating ./your_pkg_name/setup.cfg
    creating folder ./your_pkg_name/resource
    creating ./your_pkg_name/resource/your_pkg_name
    creating ./your_pkg_name/your_pkg_name/__init__.py
    creating folder ./your_pkg_name/test
    creating ./your_pkg_name/test/test_copyright.py
    creating ./your_pkg_name/test/test_flake8.py
    creating ./your_pkg_name/test/test_pep257.py
    [WARNING]: Unknown license 'TODO: License declaration'.  This has been set in the package.xml, but no LICENSE file has been created.
    It is recommended to use one of the ament license identitifers:
    Apache-2.0
    BSL-1.0
    BSD-2.0
    BSD-2-Clause
    BSD-3-Clause
    GPL-3.0-only
    LGPL-3.0-only
    MIT
    MIT-0
    ```
    you can ignore the warnings here, as it's just related to declaration of standard license file inside your package 
    
---
## Creating a New Node File inside the Package for ROS2 (File-Type: Python)
So far we have created a `New Workspace` and a `New Package` inside the Workspace. Now we'll begin the real work, and that is creating a `New Node-File` inside our Package (so that we can do some cool shit within ROS2).

1. Change Directory (move into the package - ``sample_ws/src/your_pkg_name``) 
    ```
    cd ~/sample_ws/src/your_pkg_name/your_pkg_name
    ```
2. Create a New File (and Make it Executable)
    ```
    touch example.py 
    chmod +x example.py
    ```
3. Editing the newly created File
    ```
    nano example.py
    ```
    after typing this line you'll see a new empty screen pop-up, don't worry that is the node-file which we created before, and now we have to just add our code in this node-file.
    
    copy paste the following code in your empty node-file (`example.py`) -
    ```
    #!/usr/bin/env python3
    
    import rclpy
    from rclpy.node import Node
    class MyNode(Node):
        def __init__(self):
        super().__init__('example')
        self.create_timer(0.2, self.timer_callback)

    def timer_callback(self):
        self.get_logger().info("[Enter_Your_Name] is learning ROS!")

    def main(args=None):
        rclpy.init(args=args)
        node = MyNode()
        rclpy.spin(node)
        rclpy.shutdown()

    if __name__ == '__main__':
        main()
    ```

> After copy-pasting the above code, we will have to exit the `example.py` node-file and to do that - 
just press the below keys in your PC: `Ctrl + O` ---> `Enter` ---> `Ctrl + X`

---
## Editing the Package Setup Configs 
We will edit the Package Configurations by editing the `setup.py` file which is present in our Package
1. Edit the Package Setup Configs (Opening the `setup.py` file to Edit)
    ```
    cd ~/sample_ws/src/your_pkg_name
    nano setup.py
    ```
    after typing the above line of code, we'll again get a new pop-up screen with the following code (written in python) - 
    ```
    from setuptools import find_packages, setup
    package_name = 'your_pkg_name'
    setup(
        name=package_name,
        version='0.0.0',
        packages=find_packages(exclude=['test']),
        data_files=[
            ('share/ament_index/resource_index/packages',
            ['resource/' + package_name]),
            ('share/' + package_name, ['package.xml']),
        ],
        install_requires=['setuptools'],
        zip_safe=True,
        maintainer='root',
        maintainer_email='root@todo.todo',
        description='TODO: Package description',
        license='TODO: License declaration',
        tests_require=['pytest'],
        entry_points={
            'console_scripts': [
            ],
        },
    )
    ```
    this is the actual `setup.py` file in which we have to edit and add the following line of code - 
    
    ```
    entry_points={
        'console_scripts': [
        'example=your_pkg_name.example:main', #add this line in your 'setup.py' code
        ]
    }
    ```
> After copy-pasting and making the necessary changes in the above code, we will have to exit the `setup.py` file and to do that - 
just press the below keys in your PC: `Ctrl + O` ---> `Enter` ---> `Ctrl + X`
   
---
## Running the Node-File in ROS2 Environment
After you've made the new node file and added all the code and edited the changes in it, we'll run the `example.py` node-file in the ROS2 Environment

1. Build and Source the Workspace Again 
    ```
    cd ~/sample_ws
    colcon build
    source install/setup.bash
    ```
2. Run the Node-File from your Package 
    ```
    ros2 run your_pkg_name example
    ```
    after finally typing the above line of code, you'll see your output which looks somewhat like this - 
    
    ```
    [INFO] [1756233189.439256087] [example]: [Enter_Your_Name] is learning ROS!
    [INFO] [1756233189.624581082] [example]: [Enter_Your_Name] is learning ROS!
    [INFO] [1756233189.824239942] [example]: [Enter_Your_Name] is learning ROS!
    [INFO] [1756233190.023546492] [example]: [Enter_Your_Name] is learning ROS!
    .... this keeps on continuously printing the same output 
    ```

> to stop the continuous printing of the output statement, just do `Ctrl + C` and it'll stop.
    
**Congratulations! You've Completed All the Content of this Blog**. 
Now you can, Create a Workspace and a Package within that Workspace and also Create a Node-File within that Package. And run the Node-File to get the expected output.
```
Thank You for Reading this Blog! Written by Aayush A. Mishra - August, 2025
```
