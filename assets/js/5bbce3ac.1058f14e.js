"use strict";(self.webpackChunkcentral_gateway_docs=self.webpackChunkcentral_gateway_docs||[]).push([[5067],{7324:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"central-gate-way","title":"Central Gateway","description":"Simplify payments in Bangladesh with one unified library for AamarPay, SSLCommerz, and bKash. Skip the hassle of multiple gateway documentations\u2014our consistent API does it all for you!","source":"@site/docs/central-gate-way.md","sourceDirName":".","slug":"/central-gate-way","permalink":"/central-gateway-docs/docs/central-gate-way","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar"}');var s=r(4848),t=r(8453);const i={},o="Central Gateway",l={},c=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Preparing Payment Data",id:"preparing-payment-data",level:2},{value:"Processing Payments",id:"processing-payments",level:2},{value:"Using SSLCommerz",id:"using-sslcommerz",level:3},{value:"Using AamarPay",id:"using-aamarpay",level:3},{value:"Using Bkash",id:"using-bkash",level:3},{value:"bKash-Specific Steps",id:"bkash-specific-steps",level:4},{value:"Unified Error Handling",id:"unified-error-handling",level:2},{value:"Type Definitions",id:"type-definitions",level:2},{value:"License",id:"license",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"central-gateway",children:"Central Gateway"})}),"\n",(0,s.jsx)(n.p,{children:"Simplify payments in Bangladesh with one unified library for AamarPay, SSLCommerz, and bKash. Skip the hassle of multiple gateway documentations\u2014our consistent API does it all for you!"}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Unified Interface"}),": Single, consistent Interface for multiple payment gateways."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gateway Abstraction"}),": Handles gateway-specific complexities behind the scenes."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Type Safety"}),": Full TypeScript support for a seamless development experience."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Error Handling"}),": Robust error handling with detailed error types to ensure reliability."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Multiple Gateways"}),": Supports AamarPay, SSLCommerz, and bKash out of the box."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Extensible"}),": Modular design allows for the easy addition of new gateways."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Validation"}),": Built-in validation for payment parameters to prevent errors."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Environment Support"}),": Easily toggle between sandbox and production environments."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Simple Integration"}),": One configuration pattern for all gateways simplifies setup."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsx)(n.p,{children:"Install the package using npm or yarn:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install central-gateway\r\n# or\r\nyarn add central-gateway\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:"To use the library, initialize a payment service instance with the required configurations for your gateways:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"import { PaymentService } from 'central-gateway';\r\n\r\nconst paymentService = new PaymentService({\r\n  sslcommerz: {\r\n    storeId: 'your-store-id',\r\n    storePassword: 'your-store-password',\r\n    sandbox: true, // Set to false for production\r\n  },\r\n  aamarpay: {\r\n    storeId: 'your-store-id',\r\n    signatureKey: 'your-signature-key',\r\n    serverUrl: 'https://sandbox.aamarpay.com/jsonpost.php',\r\n  },\r\n  bkash: {\r\n    username: 'your-username',\r\n    password: 'your-password',\r\n    appKey: 'your-app-key',\r\n    appSecret: 'your-app-secret',\r\n    isSandbox: true, // Set to false for production\r\n  },\r\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"preparing-payment-data",children:"Preparing Payment Data"}),"\n",(0,s.jsx)(n.p,{children:"Before initiating a payment, prepare the payment data with all the required properties. This ensures consistency and avoids repetitive code. Here\u2019s an example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const paymentData = {\r\n  amount: 50,\r\n  currency: 'BDT',\r\n  transactionId: 'unique-transaction-id',\r\n  urls: {\r\n    success: 'https://your-app.com/success',\r\n    fail: 'https://your-app.com/fail',\r\n    cancel: 'https://your-app.com/cancel',\r\n    ipn: 'https://your-app.com/ipn',\r\n  },\r\n  product: {\r\n    name: 'Product Name',\r\n    category: 'Category',\r\n    description: 'Product Description',\r\n  },\r\n  customer: {\r\n    name: 'Customer Name',\r\n    email: 'customer@email.com',\r\n    phone: '01XXXXXXXXX',\r\n    address: {\r\n      line1: 'Address Line 1',\r\n      city: 'City',\r\n      state: 'State',\r\n      postcode: '1234',\r\n      country: 'Bangladesh',\r\n    },\r\n  },\r\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"processing-payments",children:"Processing Payments"}),"\n",(0,s.jsx)(n.p,{children:"Once the payment data is prepared, select the desired gateway and process the payment. Here\u2019s an example for both SSLCommerz and AamarPay:"}),"\n",(0,s.jsx)(n.h3,{id:"using-sslcommerz",children:"Using SSLCommerz"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const sslcommerzGateway = paymentService.getGateway('sslcommerz');\r\nconst sslcommerzUrl = await sslcommerzGateway.processPayment(paymentData);\r\n\r\nconsole.log('Redirect to:', sslcommerzUrl);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-aamarpay",children:"Using AamarPay"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const aamarpayGateway = paymentService.getGateway('aamarpay');\r\nconst aamarpayUrl = await aamarpayGateway.processPayment(paymentData);\r\n\r\nconsole.log('Redirect to:', aamarpayUrl);\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-bkash",children:"Using Bkash"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const bkashGateway = paymentService.getGateway('bkash');\r\nconst bkashUrl = await bkashGateway.processPayment(paymentData);\r\n\r\nconsole.log('Redirect to:', bkashUrl);\n"})}),"\n",(0,s.jsx)(n.h4,{id:"bkash-specific-steps",children:"bKash-Specific Steps"}),"\n",(0,s.jsx)(n.p,{children:"For bKash, you need additional steps to execute and query payments:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Execute the payment in your ",(0,s.jsx)(n.code,{children:"callbackUrl"})," handler:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const { paymentID } = req.query;\r\nconst bkashGateway = paymentService.getGateway('bkash');\r\nconst executionResponse = await bkashGateway.executePayment(paymentID); // paymentID from callback\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsx)(n.li,{children:"You can query payment if you need to like this (Optional):"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const payment = await bkashGateway.queryPayment(paymentID);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"unified-error-handling",children:"Unified Error Handling"}),"\n",(0,s.jsx)(n.p,{children:"Handle errors consistently across all gateways:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"try {\r\n  const paymentUrl = await gateway.processPayment(paymentData);\r\n} catch (error) {\r\n  if (error instanceof PaymentError) {\r\n    console.error('Code:', error.code);\r\n    console.error('Message:', error.message);\r\n    console.error('Details:', error.data);\r\n    console.error('Gateway:', error.gateway);\r\n  }\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"type-definitions",children:"Type Definitions"}),"\n",(0,s.jsxs)(n.p,{children:["Here's the type definition for ",(0,s.jsx)(n.code,{children:"PaymentData"})," to guide your implementation:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"interface PaymentData {\r\n  amount: number;\r\n  currency: string;\r\n  transactionId: string;\r\n  urls: {\r\n    success: string;\r\n    fail: string;\r\n    cancel: string;\r\n    ipn?: string;\r\n    callback?: string; // Required for bKash\r\n  };\r\n  product: {\r\n    name: string;\r\n    category?: string;\r\n    description?: string;\r\n  };\r\n  customer: {\r\n    name: string;\r\n    email: string;\r\n    phone: string;\r\n    address: {\r\n      line1: string;\r\n      line2?: string;\r\n      city: string;\r\n      state: string;\r\n      postcode: string;\r\n      country: string;\r\n    };\r\n  };\r\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"license",children:"License"}),"\n",(0,s.jsxs)(n.p,{children:["This project is licensed under the MIT License - see the ",(0,s.jsx)(n.a,{href:"https://opensource.org/licenses/MIT",children:"LICENSE"})," file for details."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var a=r(6540);const s={},t=a.createContext(s);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);