class General {
  firstName: string;
  lastName: string;
  avatar: string;
}
class Job {
  company: string;
  title: string;
}
class Contact {
  email: string;
  phone: string;
}
class Address {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}
export class Client {
  general: General;
  job: Job;
  contact: Contact;
  address: Address;
}
