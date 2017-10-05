# webROSGUI_prototype1
3D visualization of Universal Robots UR5 in web browser [(video)](https://youtu.be/7M6ThsQKKKE)

## Installation & Requirements
The installation of ROS Hydro (or newer distro) and Node.js is required. The following packages are also to be installed:
- [universal_robots](http://wiki.ros.org/universal_robot) (or the driver package of your own robot)
- [ur_modern_driver](https://github.com/ThomasTimm/ur_modern_driver) (in case UR 3.x is installed in your robot)
- [joint_state_publisher](http://wiki.ros.org/joint_state_publisher)
- tf2_web_republisher
- [rosnodejs](http://wiki.ros.org/rosnodejs) (only when you are running ROS Kinetic or newer distro)
- [ws](https://www.npmjs.com/package/ws) 

Clone this repository in Catkin source folder:
```
cd ~/catkin_ws/src
git clone git@github.com:CRH380B-6216L/webROSGUI_prototype1.git
mv -T webROSGUI_prototype1 prototype_1
```

## Usage
Connect the robot and the host under the same network and run the following command on the host:
```
roslaunch prototype_1 start.launch robot_ip:=[XXX.XXX.XXX.XXX] (ip of the robot)
```
Then open the website by directly opening index.html or enter the hosted URL. 
You will see a URDF visual pane and a list of joints after a successful connection. You can interact with the visual pane to see the robot in a different view.

All the joints of the robot is shown below the visual pane.

## Misc
*[roslibjs](https://github.com/RobotWebTools/roslibjs)* and *[ros3djs](https://github.com/RobotWebTools/ros3djs)* by RobotWebTools is used in this repository.
