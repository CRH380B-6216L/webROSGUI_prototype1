# webROSGUI_prototype1
3D visualization of Universal Robots UR5 in web browser [(video)](https://youtu.be/7M6ThsQKKKE)

## Installation & Requirements
The installation of ROS Hydro (or newer distro) is required. The following packages are also to be installed:
- [universal_robots](http://wiki.ros.org/universal_robot) (or the driver package of your own robot)
- [ur_modern_driver](https://github.com/ThomasTimm/ur_modern_driver) (in case UR 3.x is installed in your robot)
- [joint_state_publisher](http://wiki.ros.org/joint_state_publisher)
- tf2_web_republisher

If you are willing to connect to non-UR robot, you will also have to copy the description folder into the repository folder.

Connect to your robot and host this website. Then, run the command on host:
```
rosrun joint_state_publisher joint_state_publisher
rosrun tf2_web_republisher tf2_web_republisher
```
If everything is well, it automatically connects when you are opening this site in the host.

You can also visit this website using other device by input the address of the robot and click connect.

## Usage
You will see a URDF visual pane and a list of joints after a successful connection. You can interact with the visual pane to see the robot in a different view.

All the joints of the robot is shown below the visual pane.

## Misc
*[roslibjs](https://github.com/RobotWebTools/roslibjs)* and *[ros3djs](https://github.com/RobotWebTools/ros3djs)* by RobotWebTools is used in this repository.
