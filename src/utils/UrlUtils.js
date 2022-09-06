// ******************************************************
// Service access URLs
// ******************************************************
//const protocol = 'http';
//const server = window.LOGIN_SERVICE_IP;
//const loginPort = '80';
//const studentPort = '80';
//const signupPort = '80';
// const profilePort = '3000';
const signupEndPoint = '/anodiam-login-service/api/auth/signup/student'
const loginEndPoint = '/anodiam-login-service/api/auth/signin';
const studentEndPoint = '/anodiam-login-service/student';
// const boardListEndPoint = '/api/master-data/boards';
// const levelListEndPoint = '/api/master-data/levels';
// const getProfileEndPoint = '/api/user/profile';
// const profileSaveEndPoint = '/api/user/save-profile';
// ******************************************************

export function getUrl (targetFunction) {
  let url = '';
  switch (targetFunction) {
    case 'loginUrl':
      url = loginEndPoint;
      break;
    case 'signupUrl':
      url = signupEndPoint;
      break;
    case 'studentUrl':
      url = studentEndPoint;
      break;
    // case 'boardListUrl':
    //   url = protocol + '://' + server + ':' + profilePort + boardListEndPoint;
    //   break;
    // case 'levelListUrl':
    //   url = protocol + '://' + server + ':' + profilePort + levelListEndPoint;
    //   break;
    // case 'getProfileUrl':
    //   url = protocol + '://' + server + ':' + profilePort + getProfileEndPoint;
    //   break;
    // case 'profileSaveUrl':
    //   url = protocol + '://' + server + ':' + profilePort + profileSaveEndPoint;
    //   break;
    default:
      url = loginEndPoint;
  }
  return (url);
}