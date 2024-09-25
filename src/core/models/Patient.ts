export class Patient {
    id: number = 0; 
    firstName: string = ''; 
    lastName: string = ''; 
    birthDate: Date = new Date(); 
    gender: string = ''; 
    contactInfo: string = ''; 
    username: string = ''; 
    password: string = ''; 
    emergencyContactFirstName: string = '';
    emergencyContactLastName: string = '';
    emergencyContactPhone: string = ''; 
    isActive: boolean = true;
    isFirstLogin: boolean = true; 
  }
  