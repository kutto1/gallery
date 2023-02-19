pipeline {
      agent any
      tools {nodejs "node"}
      
 environment {
    HEROKU_API_KEY = credentials('heroku-api-key')
    IMAGE_NAME = 'kutto1/gallery'
    IMAGE_TAG = 'latest'
    APP_NAME = 'kutto1-gallery'  
 }

  stages {
    stage ('Build') {
        steps {
         git 'https://github.com/kutto1/gallery.git'
          sh 'npm install'
               
      }
    }
      stage('Login') {
      steps {
        sh 'echo $HEROKU_API_KEY | docker login --username=_ --password-stdin registry.heroku.com'
      }
    }
    stage('Push to Heroku registry') {
      steps {
        sh '''
          docker tag $IMAGE_NAME:$IMAGE_TAG registry.heroku.com/$APP_NAME/web
          docker push registry.heroku.com/$APP_NAME/web
        '''
      }
    }
    stage('Release the image') {
      steps {
        sh '''
          heroku container:release web --app=$APP_NAME
        '''
      }
    }
  }
  post {
    always {
      sh 'docker logout'
        
      }
  
      }
  }
       
    