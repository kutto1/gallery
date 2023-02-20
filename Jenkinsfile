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
      withCredentials([gitUsernamePassword(credentialsId: 'heroku', gitToolName: 'Default')]) {
      sh 'git push https://${Default}@git.heroku.com/desolate-basin-97102.git master'
         }
        }
                          } 
    stage('Tests') {
       steps { 
       sh 'npm test'
       post {
        failure {
            emailext body: 'This is body', subject: 'Test stage status:Failed', to: 'paul.kutto@student.moringaschool.com' 
            }
            }        
          }  
        } 
    
    }
    post {
         {
           slackSend channel: 'jenkins', color: 'Green', 
           message: "Pipeline Status: Pass! ${env.JOB_NAME} ${env.BUILD_NUMBER} ${env.BUILD_URL}"       
             }
}
}

  
       
    