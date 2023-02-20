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
  }
  
        //Post { 
          //failure { emailext body: 'Fail Body', subject: 'Status for App test', to: 'paul.kutto@student.moringaschool.com' } 
            // }
          }  
} 
Post { 
          always  { slackSend baseUrl: 'https://desolate-basin-97102.herokuapp.com/', 
                    channel: 'jenkins', failOnError: true, message: 'Pipeline success notification:'
                    } 
            }
}


 
  
       
    