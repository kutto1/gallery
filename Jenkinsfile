pipeline {
      agent any
      tools {nodejs "node"}

  stages {
    stage ('Build') {
        steps {
         git 'https://github.com/kutto1/gallery.git'
          sh 'npm install'
               
      }
   }
    stage('Deploy to Heroku') {
  steps {
    withCredentials([usernameColonPassword(credentialsId: 'heroku', variable: 'HEROKU_CREDENTIALS' )]){
      sh 'git push https://${HEROKU_CREDENTIALS}@git.heroku.com/desolate-basin-97102.git master'
    }
  }
} 
}
}
  post {
    always {
      sh 'docker logout'
        
      }
  
      }
  
       
    