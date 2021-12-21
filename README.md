# vehicle-crashed-poc
POC repo to implement notification regarding user with metadata to its emergency contacts.

The broker is configured on EC2 which will publish on AWS IoT core. 
The rule configured on on AWS IoT core will invoke a lambda which will fetch emergency contacts of user and send an email or notification with geolocations.

# POC
