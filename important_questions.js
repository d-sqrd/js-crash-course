/**
    * What are server-sent events?
    Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates from a server via HTTP connection without resorting to polling. These are a one way communications channel - events flow from server to client only. This has been used in Facebook/Twitter updates, stock price updates, news feeds etc.
 
    * How do you receive server-sent event notifications
    The EventSource object is used to receive server-sent event notifications. For example, you can receive messages from server as below,
    
        if (typeof EventSource !== "undefined") {
            var source = new EventSource("sse_generator.js");
            source.onmessage = function (event) {
            document.getElementById("output").innerHTML += event.data + "<br>";
            };
        }
    
    * How do you check browser support for server-sent events?
    You can perform browser support for server-sent events before using it as below,

        if (typeof EventSource !== "undefined") {
            // Server-sent events supported. Let's have some code here!
        } else {
            // No server-sent events supported
        }
    * What are the main rules of promise
    A promise must follow a specific set of rules:
        A promise is an object that supplies a standard-compliant .then() method
        A pending promise may transition into either fulfilled or rejected state
        A fulfilled or rejected promise is settled and it must not transition into any other state.
        Once a promise is settled, the value must not change.
    
    * What is the purpose of double exclamation?
    The double exclamation or negation(!!) ensures the resulting type is a boolean. If it was falsey (e.g. 0, null, undefined, etc.), it will be false, otherwise, it will be true.

    let x = 0;
    console.log(typeof x);  // prints number
    let y = !!x;
    console.log(typeof y);  // prints boolean
    x = null;
    console.log(typeof x);  // prints object
    
    * What is typeof operator?
    You can use the JavaScript typeof operator to find the type of a JavaScript variable. It returns the type of a variable or an expression.

        typeof(1 + 2);  // prints number
        typeof(undefined);  // prints undefined
        typeof(null);   // prints object

    * What is the difference between null and undefined?
    https://github.com/sudheerj/javascript-interview-questions?tab=readme-ov-file#what-is-the-difference-between-null-and-undefined

    * What is the difference between window and document?
    https://github.com/sudheerj/javascript-interview-questions?tab=readme-ov-file#what-is-the-difference-between-window-and-document

    * What are the differences between undeclared and undefined variables?
    https://github.com/sudheerj/javascript-interview-questions?tab=readme-ov-file#what-are-the-differences-between-undeclared-and-undefined-variables

    * What are global variables and problems associated with it?
    Global variables are those that are available throughout the length of the code without any scope. The var keyword is used to declare a local variable but if you omit it then it will become global variable.
    eg: myGlobalVariable = 10;  // scope of myGlobalvariable is global
    The problem with global variables is the conflict of variable names of local and global scope. It is also difficult to debug and test the code that relies on global variables.

    * Event bubbling and event capturing
    https://www.geeksforgeeks.org/phases-of-javascript-event/
    https://www.geeksforgeeks.org/what-is-event-bubbling-and-event-capturing-in-javascript/
    Try playing with the code to get a better understanding

    * What is the difference between document load and DOMContentLoaded events?
    The DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, without waiting for assets(stylesheets, images, and subframes) to finish loading. Whereas The load event is fired when the whole page has loaded, including all dependent resources(stylesheets, images).

    * What is the difference between native, host and user objects
    Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification. For example, String, Math, RegExp, Object, Function etc core objects defined in the ECMAScript spec. 
    Host objects are objects provided by the browser or runtime environment (Node). For example, window, XmlHttpRequest, DOM nodes etc are considered as host objects. 
    User objects are objects defined in the javascript code. For example, User objects created for profile information.

    * What are the pros and cons of promises over callbacks?
    Pros:
        It avoids callback hell which is unreadable
        Easy to write sequential asynchronous code with .then()
        Easy to write parallel asynchronous code with Promise.all()
        Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)
    Cons:
        You need to load a polyfill if ES6 is not supported
        It makes little complex code

    * What is the difference between an attribute and a property?
    Attributes are defined on the HTML markup whereas properties are defined on the DOM. For example, the below HTML element has 2 attributes type and value,

        <input type="text" value="Name:">

        You can retrieve the attribute value as below,

        const input = document.querySelector("input");
        console.log(input.getAttribute("value")); // Good morning
        console.log(input.value); // Good morning

        And after you change the value of the text field to "Good evening", it becomes like

        console.log(input.getAttribute("value")); // Good evening
        console.log(input.value); // Good evening

    * What is same-origin policy?
    The same-origin policy is a policy that prevents JavaScript from making requests across domain boundaries. An origin is defined as a combination of URI scheme, hostname, and port number. If you enable this policy then it prevents a malicious script on one page from obtaining access to sensitive data on another web page using Document Object Model(DOM).

    * What is the purpose of void(0)?
    void(0) is used to prevent the page from refreshing. This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value. It is commonly used for HTML documents that use href="JavaScript:Void(0);" within an <a> element. i.e, when you click a link, the browser loads a new page or refreshes the same page. But this behavior will be prevented using this expression. For example, the below link notify the message without reloading the page

        <a href="JavaScript:void(0);" onclick="alert('Well done!')">
        Click Me!
        </a>

    * Is JavaScript a compiled or interpreted language?
    JavaScript is an interpreted language, not a compiled language. An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it. Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable bytecode just as it is about to run.

    * What is the use of preventDefault method?
    https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

    * What is the use of stopPropagation method
    The stopPropagation method is used to stop the event from bubbling up the event chain. For example, the below nested divs with stopPropagation method prevents default event propagation when clicking on nested div(Div1)

        <p>Click DIV1 Element</p>
        <div onclick="secondFunc()">DIV 2
            <div onclick="firstFunc(event)">DIV 1</div>
        </div>
        <script>
            function firstFunc(event) {
                alert("DIV 1");
                event.stopPropagation();
            }
            function secondFunc() {
                alert("DIV 2");
            }
        </script>
    
    * What is BOM
    The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. It consists of the objects navigator, history, screen, location and document which are children of the window. The Browser Object Model is not standardized and can change based on different browsers.

    * What is an event delegation?
        Event delegation is a technique for listening to events where you delegate a parent element as the listener for all of the events that happen inside it.
        It is performance optimization technique as we create a single event listener for multiple child elements within the DOM tree.

    * What is the purpose of JSON.stringify()?
    When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using stringify() method.

        var userJSON = { name: "John", age: 31 };
        var userString = JSON.stringify(userJSON);
        console.log(userString); //"{"name":"John","age":31}"

    * How do you parse JSON string?
    When receiving the data from a web server, the data is always in a string format. But you can convert this string value to a javascript object using parse() method.

        var userString = '{"name":"John","age":31}';
        var userJSON = JSON.parse(userString);
        console.log(userJSON); // {name: "John", age: 31}

    * What are PWAs?
    Progressive web applications (PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.
        Example: amazon, flipkart -> accessible via web on the computer as well as standalone mobile app

    * How do you get the current url with Javascript?
    window.location.href

    * How do you check if a key exists in an object

        Using in operator: You can use the in operator whether a key exists in an object or not
            "key" in obj;
            and If you want to check if a key doesn't exist, remember to use parenthesis,
            !("key" in obj);
    
        Using hasOwnProperty method: You can use hasOwnProperty to particularly test for properties of the object instance (and not inherited properties)
            obj.hasOwnProperty("key"); // true
        
        Using undefined comparison: If you access a non-existing property from an object, the result is undefined. Let’s compare the properties against undefined to determine the existence of the property.
            const user = {
                name: "John",
            };
            console.log(user.name !== undefined); // true
            console.log(user.nickName !== undefined); // false

    * How do you loop through or enumerate javascript object
    You can use the for-in loop to loop through javascript object. You can also make sure that the key you get is an actual property of an object, and doesn't come from the prototype using hasOwnProperty() method.

        var object = {
            k1: "value1",
            k2: "value2",
            k3: "value3",
        };
        for (var key in object) {
            if (object.hasOwnProperty(key)) {
                console.log(key + " -> " + object[key]); // k1 -> value1 ...
            }
        }

    * How do you test for an empty object
    There are different solutions based on ECMAScript versions

    Using Object entries(ECMA 7+): You can use object entries length along with constructor type.
        Object.entries(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
    
    Using Object keys(ECMA 5+): You can use object keys length along with constructor type.
        Object.keys(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
    
    Using for-in with hasOwnProperty(Pre-ECMA 5): You can use a for-in loop along with hasOwnProperty.
        function isEmpty(obj) {
            for (var prop in obj) {
                if (obj.hasOwnProperty(prop)) {
                    return false;
                }
            }
            return JSON.stringify(obj) === JSON.stringify({});
        }

    * What is an arguments object
    The arguments object is an Array-like object accessible inside functions that contains the values of the arguments passed to that function. For example, let's see how to use arguments object inside sum function,

        function sum() {
            var total = 0;
            for (var i = 0, len = arguments.length; i < len; ++i) {
                total += arguments[i];
            }
            return total;
        }
        sum(1, 2, 3); // returns 6
        
        Note: You can't apply array methods on arguments object. But you can convert into a regular array as below.
        var argsArray = Array.prototype.slice.call(arguments);

    * How do you compare two date objects
    You need to use date.getTime() method to compare date values instead of comparison operators (==, !=, ===, and !== operators)

        var d1 = new Date();
        var d2 = new Date(d1);
        console.log(d1.getTime() === d2.getTime()); //True
        console.log(d1 === d2); // False

    * Can we define properties for functions?
    Yes, We can define properties for functions because functions are also objects.

        fn = function (x) {
            //Function code goes here
        };
        fn.name = "John";
        fn.profile = function (y) {
            //Profile code goes here
        };

    * What is the way to find the number of parameters expected by a function?
    Using function.length

        function sum(num1, num2, num3, num4) {
            return num1 + num2 + num3 + num4;
        }
        sum.length; // 4 is the number of parameters expected.

    * What is a polyfill?
    A polyfill is a piece of JS code used to provide modern functionality on older browsers that do not natively support it. For example, Silverlight plugin polyfill can be used to mimic the functionality of an HTML Canvas element on Microsoft Internet Explorer 7.

    There are two main polyfill libraries available:
        Core.js: It is a modular javascript library used for cutting-edge ECMAScript features.
        Polyfill.io: It provides polyfills that are required for browser needs.

    * What are js labels
    The label statement allows us to name loops and blocks in JavaScript. We can then use these labels to refer back to the code later. In below example, "loop1" and "loop2" are labels

            var i, j;
            loop1: for (i = 0; i < 3; i++) {
                loop2: for (j = 0; j < 3; j++) {
                    if (i === j) {
                        continue loop1;
                    }
                    console.log("i = " + i + ", j = " + j);
                }
            }

    * Can you write a random integers function to print integers within a range
    Yes, you can create a proper random function to return a random number between min and max (both included)

        function randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
        randomInteger(1, 100); // returns a random integer from 1 to 100
        randomInteger(1, 1000); // returns a random integer from 1 to 1000

    * What is tree shaking?
    Tree shaking is a form of dead code elimination. It means that unused modules will not be included in the bundle during the build process and for that it relies on the static structure of ES2015 module syntax,( i.e. import and export). Initially this has been popularized by the ES2015 module bundler rollup.

    * What is a debugger statement
    The debugger statement invokes any available debugging functionality, such as setting a breakpoint. If no debugging functionality is available, this statement has no effect. For example, in the below function a debugger statement has been inserted. So execution is paused at the debugger statement just like a breakpoint in the script source.

        function getProfile() {
            // code goes here
            debugger;
            // code goes here
        }

    * How do you make synchronous HTTP request?
    Browsers provide an XMLHttpRequest object which can be used to make synchronous HTTP requests from JavaScript

        function httpGet(theUrl) {
            var xmlHttpReq = new XMLHttpRequest();
            xmlHttpReq.open("GET", theUrl, false); // false for synchronous request
            xmlHttpReq.send(null);
            return xmlHttpReq.responseText;
        }

    * Piece of code where semi-colon is required
        const a = 1;
        const b = 2;
        const c = a + b     // if we don't put ; here then error will be thrown
        (a + b).toString();

    * Object.freeze(obj) and Object.seal(obj) methods of Object class
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/seal

    * How do you detect javascript disabled in the page
    You can use the <noscript> tag to detect javascript disabled or not. The code block inside <noscript> gets executed when JavaScript is disabled, and is typically used to display alternative content when the page generated in JavaScript.

        <script type="javascript">
            // JS related code goes here
        </script>
        <noscript>
            <a href="next_page.html?noJS=true">JavaScript is disabled in the page. Please click Next Page</a>
        </noscript>

    * Rest and Spread operator

    *What is the purpose of using object is method

        It is used for comparison of two strings.
        It is used for comparison of two numbers.
        It is used for comparing the polarity of two numbers.
        It is used for comparison of two objects.

    * Object.assign() method
    Object.assign() is used to copy the values and properties from one or more source objects to a target object. It returns the target object which has properties and values copied from the source objects.
        const target = { a: 1, b: 2 };
        const source = { b: 3, c: 4 };
        const returnedTarget = Object.assign(target, source);
        console.log(target); // { a: 1, b: 3, c: 4 }
        console.log(returnedTarget); // { a: 1, b: 3, c: 4 }
        
        const obj1 = {a: 1, b: 2};
        const obj2 = {b: 3, c: 4};
        console.log(Object.assign({}, obj1, obj2)); // {a: 1, b: 3, c: 4}
        console.log(obj1);  //{a: 1, b: 2}

    * Object.entries(obj method
    Can be used to iterate over both the key and the corresponding value of an object
        const obj = {
            name: "Debarshi",
            age: 25
        }
        for(let [key, val] of Object.entries(obj)) {
            console.log(`${key}: ${val}`);  // iteration-1: name: Debarshi; iteration-2: age: 25
        }

    * Object.create(obj) method
        const obj = {
            name: "Debarshi",
            age: 25
        }
        const obj2 = Object.create(obj)
        console.log(obj);   // {name: "Debarshi", age: 25}
        console.log(obj2);  // {}...however on checking the prototype chain we can see the "obj" object as {name: "Debarshi", age: 25}
        obj.name = "Rahul"
        console.log(obj);   // {name: "Rahul", age: 25}
        console.log(obj2);  // {}...however on checking the prototype chain we can see the "obj" object as {name: "Rahul", age: 25}
        obj2.name = "Ram";
        console.log(obj2);  // {name: "Ram"}...however on checking the prototype chain we can see the "obj" object as {name: "Rahul", age: 25}

    * Array.slice() method
        let arr = [1, 2, 3, 4, 5]
        arr.slice(2);   // [3, 4, 5]
        arr.slice(1, 4);    // [2, 3, 4]
        arr.slice(-1);  //  [5]
        arr.slice(-2);  // [4, 5]
        arr.slice(-3);  // [3, 4, 5]
        arr.slice(-4);  // [2, 3, 4, 5]
        arr.slice(-5);  // [1, 2, 3, 4, 5]
        arr.slice(-5, 1);   // [1]
        arr.slice(-5, 2);   // [1, 2]
        arr.slice(-3, 4);   // [3, 4]
        arr.slice(-3, 5);   // [3, 4, 5]

        slice() method does not modify the original array and only creates a subset of it

    * Array.splice() method
        let arr1 = [1, 2, 3, 4, 5]
        console.log(arr1.splice(1, 4));  // [2, 3, 4]
        console.log(arr1);      // [1, 5]

        let arr2 = [1, 2, 3, 4, 5]
        console.log(arr12.splice(-5, 3));  // [1, 2, 3]
        console.log(arr2);      // [4, 5]

        splice method modifies the existing array
 */
