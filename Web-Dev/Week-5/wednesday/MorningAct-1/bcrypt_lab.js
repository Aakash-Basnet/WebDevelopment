const bcrypt = require('bcrypt');

// async function hashPassword() {
//   const password = 'mypassword123';
//   try {
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     const isMatch = await bcrypt.compare(password, hashedPassword);
//     if (isMatch) {
//       console.log('password matched');
//     } else {
//       console.log('not matched');
//     }

//     console.log('password: ', password);
//     console.log('salt: ', salt);
//     console.log('hashed password: ', hashedPassword);
//   } catch (error) {
//     console.log('error: ', error);
//   }
// }
// hashPassword();

const password = 'mySecurePassword';

// Hash password synchronously with 10 salt rounds
const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);

console.log('Synchronous Hashed Password:', hashedPassword);
