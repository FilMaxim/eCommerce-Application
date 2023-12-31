# eCommerce Application 🛍️🌐

Welcome to our eCommerce application! This platform replicates real-world shopping experiences in a digital environment 🏪. It's a comprehensive online shopping portal that provides an interactive and seamless experience to users. From product discovery to checkout, the application ensures a smooth journey for the user, enhancing their engagement and boosting their purchasing confidence 🚀.

Users can browse through a vast range of products 📚👗👟, view detailed descriptions, add their favorite items to the basket 🛒, and proceed to checkout 💳. It includes features such as user registration and login 📝🔐, product search 🔍, product categorization, and sorting to make the shopping experience more streamlined and convenient.

An important aspect of our application is that it's responsive 📲, ensuring it looks great on various devices with a minimum resolution of 390px. This feature makes the shopping experience enjoyable, irrespective of the device users prefer.

Key pages in the application include:

- Login and Registration pages 🖥️
- Main page 🏠
- Catalog Product page 📋
- Detailed Product page 🔎
- User Profile page 👤
- Basket page 🛒
- About Us page 🙋‍♂️🙋‍♀️

The application is powered by [CommerceTools](https://docs.commercetools.com/docs) 🌐, a leading provider of commerce solutions for B2C and B2B enterprises. CommerceTools offers a cloud-native, microservices-based commerce platform that enables brands to create unique and engaging digital commerce experiences.

The application developed by teams of three 👨‍💻👨‍💻👨‍💻: 🏄[glitch-surfer](https://github.com/glitch-surfer), 🤹‍♂️[filmaxim](https://github.com/filmaxim) & 🙆‍♂️[pavelvl21](https://github.com/pavelvl21). 

## Technology Stack 💻📚

This app is SPA and develop with:
- React ⚛️ (It allows the application to have high performance and responsiveness, start with create-react-app and then customize some dependancies)
- TypeScript (It ensure type safety and improve the maintainability and scalability of the application 📘)
- Webpack (supporting both development and production build modes)
- ESlint (react+ts recommended rules to enforce consistent coding styles and identify potential issues in the codebase)
- Prettier (to automatically format code, ensuring a consistent and readable code style)
- Husky (to manage Git hooks, automating tasks such as code formatting and linting checks during the commit process)
- Jest (as the testing framework for the project, enabling comprehensive testing of code functionality)

### Key Pages

1. **Login Page 🖥️🔐**  
   The Login page is the user's entry point to the application. It have fields for entering the username and password. There validation checks in place to ensure that all fields are filled before allowing the user to submit the form. On successful login, the user directed to the main page of the application.

2. **Registration Page 🖥️📝**  
   The Registration page allow new users to sign up for the application. It have fields for entering user information including a username, email, and password. Once the user submits the form after entering all the necessary details, they will be registered and directed to the login page.

3. **Main Page 🏠**  
   The Main Page is the core of the application. This is where the users can browse the catalog of products. The page provide a user-friendly interface that allows users to easily navigate through different categories and products. Centralized Navigation is a key feature on this page, and include links to all functional pages of the application. Each link should redirect the user correctly to the corresponding page without any errors. The main page also displays active promo codes.

4. **Catalog Product Page 📋**  
   The Catalog Product page display a list of products in a specific category. The products displayed as interactive cards with a picture and essential details about the product. Users can click on these cards to get more detailed information about the product.

5. **Detailed Product Page 🔎**  
   The Detailed Product page is where the user can view detailed information about a specific product. It display an image of the product, a detailed description, the price, and the available options for the product. Users able to add the product to their basket from this page.

6. **User Profile Page 👤**  
   The User Profile page display the personal information of the user. This includes their name, date of birth, and a list of their addresses. This page also provide an interface for users to edit their personal details and addresses.

7. **Basket Page 🛒**  
   The Basket page is where users can view the products they have added to their basket. They can increase or decrease the quantity of each item or remove items from the basket. The page also display the subtotal and total prices and provide an option for the users to proceed to the checkout page.

8. **About Us Page 🙋‍♂️🙋‍♀️**  
   The About Us page give a brief introduction to the development team. It highlight each member's contributions to the project and provide personal details such as names, roles, short bios, relevant photos, and GitHub profile links.

# Locally setup instruction & available scripts

-  clone this repo

- `yarn install`
If you don't have yarn, `npm i --global yarn` before

- `yarn start` 
Runs dev-server on http://localhost:3000/

- `yarn build`
Build production bundle

## Other scripts

- `yarn test`
Runs jest tests

- `yarn lint`
Runs js, jsx, ts, tsx files linting

- `yarn format`
Runs Prettier formatting across the codebase

- `yarn eject`
Give access to dependancies config files
