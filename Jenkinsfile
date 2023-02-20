pipeline {
      agent any
      tools {nodejs "node"}

  stages {
    stage ('Build') {
        steps {
         git 'https://github.com/kutto1/gallery.git'
          sh 'npm install'
         Post { 
          always  { slackSend channel: 'jenkins', message: 'Pipeline Status'}
            
            }      
      }
   }
    stage('Deploy to Heroku') {
      steps {
      withCredentials([gitUsernamePassword(credentialsId: 'heroku', gitToolName: 'Default')]) {
      sh 'git push https://${Default}@git.heroku.com/desolate-basin-97102.git master'
         }
        }
                          } 
    stage('Tests') {
       steps { 
       sh 'npm test'
  }
  
        
          }  
} 
    
}

  
       
    