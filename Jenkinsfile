pipeline {
    agent any

    environment {
        NODE_ENV = 'production'
        EC2_USER = 'ubuntu'
        EC2_MAIN_IP = '44.205.149.189'
        EC2_DEV_IP = "54.90.179.128"
        EC2_QA_IP = "184.73.177.137"
        REMOTE_PATH = '/home/ubuntu/jenkins-practica-1'
        SSH_KEY = credentials('ssh-key-ec2')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'rm -rf node_modules'
                sh 'npm ci'
            }
        }

        stage('Setup Servers') {
            steps {
                script {
                    def servers = [
                        [ip: EC2_MAIN_IP, branch: 'main'],
                        [ip: EC2_DEV_IP,  branch: 'dev'],
                        [ip: EC2_QA_IP,   branch: 'qa']
                    ]

                    for (server in servers) {
                        echo "Configuring ${server.ip}..."

                        sh """
                        ssh -i $SSH_KEY -o StrictHostKeyChecking=no $EC2_USER@${server.ip} '
                            sudo apt-get update -y &&
                            sudo apt-get upgrade -y &&
                            curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash - &&
                            sudo apt-get install -y nodejs &&
                            sudo npm install -g pm2
                        '
                        """
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    def branch = env.GIT_BRANCH.replaceAll('origin/', '')
                    echo branch
                    def ip = ""
                    if(branch == "main"){
                        ip = env.EC2_MAIN_IP
                    } else if(branch == "dev"){
                        ip = env.EC2_DEV_IP
                    } else if(branch == "qa") {
                        ip = env.EC2_QA_IP
                    } else {
                        error("no hay un servidor para esta rama ${branch}")
                    }

                    sh """
                    ssh -i $SSH_KEY -o StrictHostKeyChecking=no $EC2_USER@$ip '
                        cd $REMOTE_PATH &&
                        git pull origin ${branch} &&   
                        npm ci &&
                        pm2 restart health-api || pm2 start server.js --name health-api
                    '
                    """
                }    
            }
        }
    }
}