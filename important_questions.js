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

    * What is the use of preventDefault method
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

    *
 */
