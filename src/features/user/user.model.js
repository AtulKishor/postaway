export default class UserModel {
  constructor(name, email, password) {
    this.id = Date.now();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static getAll(){
    return users;
  }

  static getUserId(email, password){
    const userId = users.find((u) => u.email == email && u.password == password);
    if(userId) return {success: true, msg: userId.id};
    else return {success: false, msg: 'No users found!'};
  }

  static signUp(name, email, password) {
    //Validate email
    if(!email.includes('@') || !email.includes('.'))
    return {success: false, msg: 'Enter valid email address!'};

    //Check if the user already exists
    const result = users.find((u) => u.email == email);
    if (result) return { success: false, msg: "User already exists!" };
    else {
      const newUser = new UserModel(name, email, password);
      users.push(newUser);
      return { success: true, msg: "Signup successful!" };
    }
  }

  static signIn(email, password)
  {
    //Validate email
    if(!email.includes('@') || !email.includes('.'))
    return {success: false, msg: 'Enter valid email address!'};

    //Find the user
    const findUser = users.find((u) => u.email == email && u.password == password);
    if(findUser) return {success: true, msg: findUser}; //return the user
    else
    return {success: false, msg:"User doesn't exists!"}
  }
}

let users = [new UserModel("Gautam", "gautam@gmail.com", "gautam123")];
