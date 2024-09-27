export class Patient {
    Id: number = 0; 
    FirstName: string = ''; 
    LastName: string = ''; 
    DateOfBirth: Date = new Date(); 
    Gender: string = ''; 
    ContactInformation: string = ''; 
    Username: string = ''; 
    Password: string = ''; 
    EmergencyContactFirstName: string = '';
    EmergencyContactLastName: string = '';
    EmergencyContactPhone: string = ''; 
    IsDeleted: boolean = false;
    IsFirstLogin: boolean = true; 
  }
  