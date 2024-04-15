# Snyk-Technical-Assessment

## Question 1
**1.Explain the difference between a stack and a queue. Provide real-life examples of scenarios where each is used.**

### Stack
A **stack** is a linear data structure that follows the LIFO principle,which means the element inserted last is the first element to be removed. In stack data structure, elements can be inserted an deleted only from the top.

**Example:**
- Whenever a user visits a new webpage, its URL is pushed onto a stack. Clicking the back button pops the most recent URL off the stack, returning the user to the preceding page. This LIFO mechanism facilitates intuitive navigation through a user's browsing history.

### Queue
A **queue** is also a linear data structure but follows the FIFO principle.This means the element inserted first is the first element to be removed from list.In queue data structure ,elements can be inserted only from one side and deleted from the other side.

**Example:**
- In my experience as a working student at Bosch, I saw the FIFO principle in action on the production line. Components were added to the assembly line in a specific order and processed in that same order. This queue system is essential for maintaining productivity and systematic operations.
## Question 2
**What is the difference between an array and a linked list? Provide advantages and disadvantages of each data structure.**

### Array
An **array** is a data structure that consists of elements of the same type, stored in contiguous memory blocks. This arrangement allows efficient direct access to any element via its index.

**Advantages:**
- **Direct Access:** Arrays allow fast read operations by accessing elements directly through their index.
- **Predictable Memory Location:** The use of contiguous memory blocks facilitates quick navigation through the array.

**Disadvantages:**
- **Fixed Size:** Arrays typically use static memory allocation, which fixes their size at compile time and restricts flexibility.
- **Inefficient Memory Utilization:** Due to the fixed size, arrays might waste memory or may not have enough memory.

### Linked List
A **linked list** is a collection of nodes, each containing data and a reference to the next node in the sequence. Nodes may be scattered throughout memory, and linked lists use dynamic memory allocation.

**Advantages:**
- **Dynamic Structure:** Linked lists allow easy modification ,additions and deletions of nodes, without the need for reallocation, adapting to the data structure’s size dynamically.
- **Efficient Memory Utilization:** Memory is allocated as needed, which can be more efficient compared to static memory allocation.

**Disadvantages:**
- **Slower Access:** Accessing elements in a linked list requires sequential traversal from the start of the list, which is slower compared to direct index-based access in arrays.
## Question 3
**What is HTTP? How is it different from HTTPS?**

### HTTP (HyperText Transfer Protocol)
**HTTP** was developed to establish communication between web browsers and web servers, acting as a set of rules for transferring various types of data. 

**Key Points:**
- **Usage:** Whenever someone opens their web browser, they are using HTTP to access web content.
- **Security Concern:** HTTP does not encrypt data, which means confidentiality cannot be guaranteed as the content is accessible to anyone who can intercept it.

### HTTPS (HyperText Transfer Protocol Secure)
**HTTPS** represents a more advanced and efficient version of HTTP. It includes additional security measures to protect data during transmission.

**Key Points:**
- **Secure Communication:** Utilizes port 443 for data communication and encrypts all communication with SSL (Secure Sockets Layer).
- **Data Security:** Allows for a secure, encrypted connection between the server and the browser, providing data security in both directions.
## Question 4
**Can you give some examples of common HTTP response codes?**

In my experience, the most common HTTP response codes that I have encountered include:

- **200 OK**:
  -  Indicates that the request was successfully received, understood, and accepted.
- **400 Bad Request**:
  -  Signals that the server could not process the request due to a client error (e.g., malformed request syntax).
- **401 Unauthorized**:
  -  Means that authentication is required and has either failed or has not yet been provided.
- **404 Not Found**:
  -  The server could not find the requested resource; this is commonly seen when a URL does not exist on the server.
## Question 5
**What is the difference between authorization and authentication?**

- **Authentication**:
  -  Authentication is the process that verifies the identity of a user to confirm they are who they claim to be. It involves checking the credentials provided by users, such as usernames and passwords, to establish their authenticity.
  
- **Authorization**:
  -  Authorization is a security process that determines the level of access granted to a user or service after they are authenticated. This process involves validating the permissions of users to ensure they have the appropriate access rights to resources.
## Question 6
**How would you explain to a 5-year-old how the World Wide Web (WWW) works?**

Imagine the World Wide Web as a huge toy store where you can find every toy you can think of.

- **Finding the Toy Store:** Just like when you want a specific toy, you need to know where the toy store is. On the Web, every toy store has a special name called a web address (or URL).
  
- **Going to the Toy Store:** When you tell your browser the name of the toy store (typing in the URL), it's like telling your parents where you want to go. The browser asks a special guide (called the DNS, or Domain Name System) to find the exact location of that toy store.

- **Asking for Your Toy:** Once you arrive at the toy store, you ask the shop assistant (the server) for your specific toy. This is like your browser sending a request to the website's server to show you a specific page.

- **Getting the Toy:** The shop assistant goes to the back, finds your toy car, and brings it out for you. Similarly, the server takes the browser's request, finds the information, and sends it back to the browser.

- **Playing with the Toy:** Finally, you get to play with your toy! Just like when the webpage loads on your computer or tablet, and you get to see and interact with everything on it.











