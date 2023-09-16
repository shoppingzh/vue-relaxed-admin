pipeline {
  agent any
  stages {
    stage('build') {
      steps {
        git(url: 'https://github.com/shoppingzh/vue-relaxed-admin.git', branch: 'main', changelog: true)
        nodejs 'nodejs18'
      }
    }

  }
}