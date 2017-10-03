var app = new Vue({
    el: '#app1',
    data: {
        address: 'ws://localhost:9090',
        path: 'http://145.93.130.6:8000/',
        state: 'disconnected',
        ros: {},
        rosCompo: {
            joint: null,
            tf: null,
            urdf: null,
            viewer: null
        },
        nameJoints: [],
        valueJoints: []
    },
    methods: {
        connect() {
            var vm = this;
            vm.ros = new ROSLIB.Ros({
                url: vm.address
            });

            vm.ros.on('connection', function() {
                vm.state = 'success';
                vm.rosInit();
                vm.getPose();
                vm.rosInitView2();
            });

            vm.ros.on('error', function(error) {
                vm.state = 'disconnected';
                console.log('Error connecting to websocket server: ', error);
            });

            vm.ros.on('close', function() {
                vm.state = 'disconnected';
                console.log('Connection to websocket server closed.');
            });
        },
        rosInit() {
            var vm = this;
            vm.rosCompo.joint = new ROSLIB.Topic({
                ros: vm.ros,
                name: '/joint_states',
                messageType: 'sensor_msgs/JointState'
            });
        },
        rosInitView2() {
            var vm = this;
            var ifrm = document.createElement("iframe");
            ifrm.setAttribute("src", "./urdf.htm?address="+vm.address+"&path="+vm.path);
            ifrm.style.width = "801px";
            ifrm.style.height = "604px";
            document.getElementById('visual').appendChild(ifrm);
        },
        rosInitView() {
            // Create the main viewer.
            var vm = this;
            vm.rosCompo.viewer = new ROS3D.Viewer({
                divID : 'urdf',
                width : 800,
                height : 600,
                antialias : true
            });

            // Add a grid.
            vm.rosCompo.viewer.addObject(new ROS3D.Grid());

            // Setup a client to listen to TFs.
            vm.rosCompo.tf = new ROSLIB.TFClient({
                ros : vm.ros,
                angularThres : 0.01,
                transThres : 0.01,
                rate : 10.0
            });

            // Setup the URDF client.
            vm.rosCompo.urdf = new ROS3D.UrdfClient({
                ros : vm.ros,
                tfClient : vm.rosCompo.tf,
                path : vm.path,
                rootObject : vm.rosCompo.viewer.scene,
                loader : ROS3D.COLLADA_LOADER
            });
            document.getElementById('btnLoadView').style.display = 'none';
        },
        getPose() {
            var vm = this;

            vm.rosCompo.joint.subscribe(function(message) {
                //console.log('Received message on ' + vm.rosCompo.joint.name + ': ' + JSON.stringify(message));
                vm.nameJoints = message.name;
                vm.valueJoints = message.position;
                //vm.rosCompo.joint.unsubscribe();
            });
        }
    },
    created() {
        console.log('23333');
        this.connect();
    }
});
