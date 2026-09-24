/* =====================================================
   QUIZMASTER
   QUIZ MANAGEMENT SYSTEM
===================================================== */

/* =====================================================
   QUIZAPI.IO CONFIGURATION
   -----------------------------------------------
   Place your API key below. This key is sent in
   the Authorization header with every request.
   -----------------------------------------------
   ⚠️  Since this is a frontend-only project, the
   key is visible in browser DevTools. This is fine
   for personal / educational use. For production,
   use a backend proxy or serverless function.
===================================================== */

const QUIZ_API_KEY =
    "YOUR_BACKEND_API_KEY";

const QUIZ_API_BASE =
    "https://quizapi.io/api/v1/questions";

/*
    Maps each subject name to one or more
    QuizAPI.io categorySlug values.
    Subjects with multiple slugs will have
    their results merged.
*/
const SUBJECT_API_MAP = {

    Java: ["java"],

    Python: ["python"],

    SQL: ["sql", "sql-queries"],

    DBMS: ["database-design"],

    "Web Development": ["javascript", "css"],

    DSA: ["data-structures", "algorithms"]

};

/* =====================================================
   QUIZ DATABASE  (10 fallback questions per subject)
===================================================== */

const quizData = {

    Java: [

        {
            question:
                "Which keyword is used to inherit a class in Java?",

            options: [
                "implements",
                "extends",
                "inherits",
                "super"
            ],

            answer: 1
        },

        {
            question:
                "Which method is the entry point of a Java program?",

            options: [
                "start()",
                "run()",
                "main()",
                "execute()"
            ],

            answer: 2
        },

        {
            question:
                "Which collection does not allow duplicate elements?",

            options: [
                "List",
                "Set",
                "ArrayList",
                "Vector"
            ],

            answer: 1
        },

        {
            question:
                "Which keyword is used to create an object?",

            options: [
                "class",
                "object",
                "new",
                "create"
            ],

            answer: 2
        },

        {
            question:
                "Which concept allows the same method name with different parameters?",

            options: [
                "Inheritance",
                "Overloading",
                "Encapsulation",
                "Abstraction"
            ],

            answer: 1
        },

        {
            question:
                "Which access modifier makes a member visible only within its own class?",

            options: [
                "public",
                "protected",
                "private",
                "default"
            ],

            answer: 2
        },

        {
            question:
                "What is the default value of an int variable in Java?",

            options: [
                "null",
                "0",
                "undefined",
                "-1"
            ],

            answer: 1
        },

        {
            question:
                "Which keyword prevents a class from being inherited?",

            options: [
                "static",
                "abstract",
                "final",
                "sealed"
            ],

            answer: 2
        },

        {
            question:
                "Which interface must be implemented for sorting objects in Java?",

            options: [
                "Serializable",
                "Comparable",
                "Iterable",
                "Cloneable"
            ],

            answer: 1
        },

        {
            question:
                "What does JVM stand for?",

            options: [
                "Java Variable Machine",
                "Java Virtual Machine",
                "Java Visual Manager",
                "Java Version Model"
            ],

            answer: 1
        }

    ],


    Python: [

        {
            question:
                "Which symbol is used for comments in Python?",

            options: [
                "//",
                "/*",
                "#",
                "<!--"
            ],

            answer: 2
        },

        {
            question:
                "Which data type stores key-value pairs?",

            options: [
                "List",
                "Tuple",
                "Dictionary",
                "Set"
            ],

            answer: 2
        },

        {
            question:
                "Which keyword defines a function?",

            options: [
                "function",
                "define",
                "def",
                "fun"
            ],

            answer: 2
        },

        {
            question:
                "Which function is used to find the length of a list?",

            options: [
                "length()",
                "size()",
                "len()",
                "count()"
            ],

            answer: 2
        },

        {
            question:
                "Which collection is immutable?",

            options: [
                "List",
                "Dictionary",
                "Set",
                "Tuple"
            ],

            answer: 3
        },

        {
            question:
                "What is the output of print(type(10.0))?",

            options: [
                "<class 'int'>",
                "<class 'float'>",
                "<class 'double'>",
                "<class 'number'>"
            ],

            answer: 1
        },

        {
            question:
                "Which keyword is used to handle exceptions in Python?",

            options: [
                "catch",
                "except",
                "handle",
                "error"
            ],

            answer: 1
        },

        {
            question:
                "What does the 'self' keyword refer to in a Python class?",

            options: [
                "The parent class",
                "The current instance",
                "A global variable",
                "The class name"
            ],

            answer: 1
        },

        {
            question:
                "Which method adds an element to the end of a list?",

            options: [
                "add()",
                "insert()",
                "append()",
                "push()"
            ],

            answer: 2
        },

        {
            question:
                "What does 'pip' stand for in Python?",

            options: [
                "Python Install Packages",
                "Pip Installs Packages",
                "Package Installer for Python",
                "Python Internal Package"
            ],

            answer: 2
        }

    ],


    SQL: [

        {
            question:
                "Which SQL command is used to retrieve data?",

            options: [
                "GET",
                "SELECT",
                "FETCH",
                "SHOW"
            ],

            answer: 1
        },

        {
            question:
                "Which clause is used to filter rows?",

            options: [
                "ORDER BY",
                "GROUP BY",
                "WHERE",
                "HAVING"
            ],

            answer: 2
        },

        {
            question:
                "Which command removes a table completely?",

            options: [
                "DELETE",
                "REMOVE",
                "DROP",
                "CLEAR"
            ],

            answer: 2
        },

        {
            question:
                "Which keyword removes duplicate rows from results?",

            options: [
                "UNIQUE",
                "DISTINCT",
                "DIFFERENT",
                "ONLY"
            ],

            answer: 1
        },

        {
            question:
                "Which SQL operation combines rows from two or more tables?",

            options: [
                "JOIN",
                "MERGE",
                "COMBINE",
                "CONNECT"
            ],

            answer: 0
        },

        {
            question:
                "Which aggregate function returns the total number of rows?",

            options: [
                "SUM()",
                "TOTAL()",
                "COUNT()",
                "NUM()"
            ],

            answer: 2
        },

        {
            question:
                "Which SQL statement is used to update existing data?",

            options: [
                "MODIFY",
                "CHANGE",
                "ALTER",
                "UPDATE"
            ],

            answer: 3
        },

        {
            question:
                "Which type of JOIN returns all rows from the left table?",

            options: [
                "INNER JOIN",
                "LEFT JOIN",
                "RIGHT JOIN",
                "CROSS JOIN"
            ],

            answer: 1
        },

        {
            question:
                "Which clause is used to sort query results?",

            options: [
                "SORT BY",
                "ORDER BY",
                "ARRANGE BY",
                "GROUP BY"
            ],

            answer: 1
        },

        {
            question:
                "Which constraint ensures all values in a column are different?",

            options: [
                "PRIMARY KEY",
                "CHECK",
                "UNIQUE",
                "NOT NULL"
            ],

            answer: 2
        }

    ],


    DBMS: [

        {
            question:
                "What does ACID stand for?",

            options: [
                "Atomicity, Consistency, Isolation, Durability",
                "Access, Control, Index, Data",
                "Atomic, Control, Integrity, Data",
                "Access, Consistency, Isolation, Database"
            ],

            answer: 0
        },

        {
            question:
                "Which normal form removes partial dependency?",

            options: [
                "1NF",
                "2NF",
                "3NF",
                "BCNF"
            ],

            answer: 1
        },

        {
            question:
                "Which key uniquely identifies a record?",

            options: [
                "Foreign Key",
                "Primary Key",
                "Candidate Key",
                "Composite Key"
            ],

            answer: 1
        },

        {
            question:
                "Which model represents entities and relationships?",

            options: [
                "ER Model",
                "Network Model",
                "Object Model",
                "Hierarchical Model"
            ],

            answer: 0
        },

        {
            question:
                "A foreign key references which key in another table?",

            options: [
                "Primary Key",
                "Alternate Key",
                "Super Key",
                "Composite Key"
            ],

            answer: 0
        },

        {
            question:
                "Which type of database stores data in tables with rows and columns?",

            options: [
                "NoSQL Database",
                "Relational Database",
                "Graph Database",
                "Document Database"
            ],

            answer: 1
        },

        {
            question:
                "What is a deadlock in DBMS?",

            options: [
                "A fast query execution",
                "Two transactions waiting for each other indefinitely",
                "A type of index",
                "A backup mechanism"
            ],

            answer: 1
        },

        {
            question:
                "Which language is used to define database schema?",

            options: [
                "DML",
                "DDL",
                "DCL",
                "TCL"
            ],

            answer: 1
        },

        {
            question:
                "What is normalization in DBMS?",

            options: [
                "Adding redundant data",
                "Organizing data to reduce redundancy",
                "Deleting unused tables",
                "Encrypting data"
            ],

            answer: 1
        },

        {
            question:
                "Which DBMS concept ensures that a transaction is treated as a single unit?",

            options: [
                "Consistency",
                "Isolation",
                "Atomicity",
                "Durability"
            ],

            answer: 2
        }

    ],


    "Web Development": [

        {
            question:
                "Which HTML tag creates a hyperlink?",

            options: [
                "<link>",
                "<a>",
                "<href>",
                "<url>"
            ],

            answer: 1
        },

        {
            question:
                "Which CSS property changes text color?",

            options: [
                "font-color",
                "text-color",
                "color",
                "foreground"
            ],

            answer: 2
        },

        {
            question:
                "Which language makes a webpage interactive?",

            options: [
                "HTML",
                "CSS",
                "JavaScript",
                "SQL"
            ],

            answer: 2
        },

        {
            question:
                "Which CSS property is used to create rounded corners?",

            options: [
                "corner-radius",
                "border-radius",
                "round-border",
                "radius"
            ],

            answer: 1
        },

        {
            question:
                "Which keyword declares a constant in JavaScript?",

            options: [
                "constant",
                "let",
                "var",
                "const"
            ],

            answer: 3
        },

        {
            question:
                "Which HTML tag is used to define an unordered list?",

            options: [
                "<ol>",
                "<list>",
                "<ul>",
                "<li>"
            ],

            answer: 2
        },

        {
            question:
                "What does CSS stand for?",

            options: [
                "Computer Style Sheets",
                "Creative Style System",
                "Cascading Style Sheets",
                "Colorful Style Sheets"
            ],

            answer: 2
        },

        {
            question:
                "Which JavaScript method selects an element by its ID?",

            options: [
                "getElement()",
                "querySelector()",
                "getElementById()",
                "findElement()"
            ],

            answer: 2
        },

        {
            question:
                "Which CSS display value hides an element completely?",

            options: [
                "hidden",
                "invisible",
                "none",
                "collapse"
            ],

            answer: 2
        },

        {
            question:
                "Which HTML attribute specifies an alternate text for an image?",

            options: [
                "title",
                "src",
                "alt",
                "description"
            ],

            answer: 2
        }

    ],


    DSA: [

        {
            question:
                "Which data structure follows LIFO?",

            options: [
                "Queue",
                "Stack",
                "Array",
                "Graph"
            ],

            answer: 1
        },

        {
            question:
                "Which data structure follows FIFO?",

            options: [
                "Stack",
                "Tree",
                "Queue",
                "Heap"
            ],

            answer: 2
        },

        {
            question:
                "What is the average time complexity of binary search?",

            options: [
                "O(n)",
                "O(log n)",
                "O(n²)",
                "O(1)"
            ],

            answer: 1
        },

        {
            question:
                "Which traversal visits root between left and right subtree?",

            options: [
                "Preorder",
                "Postorder",
                "Inorder",
                "Level order"
            ],

            answer: 2
        },

        {
            question:
                "Which structure is commonly used to represent hierarchical data?",

            options: [
                "Tree",
                "Queue",
                "Stack",
                "Array"
            ],

            answer: 0
        },

        {
            question:
                "What is the worst-case time complexity of bubble sort?",

            options: [
                "O(n)",
                "O(n log n)",
                "O(n²)",
                "O(log n)"
            ],

            answer: 2
        },

        {
            question:
                "Which data structure uses a hash function to map keys to values?",

            options: [
                "Array",
                "Linked List",
                "Hash Table",
                "Binary Tree"
            ],

            answer: 2
        },

        {
            question:
                "What is the maximum number of children a binary tree node can have?",

            options: [
                "1",
                "2",
                "3",
                "Unlimited"
            ],

            answer: 1
        },

        {
            question:
                "Which algorithm is used to find the shortest path in a weighted graph?",

            options: [
                "DFS",
                "BFS",
                "Dijkstra's",
                "Bubble Sort"
            ],

            answer: 2
        },

        {
            question:
                "Which data structure is used in recursion internally?",

            options: [
                "Queue",
                "Stack",
                "Array",
                "Heap"
            ],

            answer: 1
        }

    ]

};

/* =====================================================
   QUIZAPI.IO  –  FETCH & TRANSFORM
===================================================== */

/**
 * Fetches 10 questions from QuizAPI.io for the
 * given subject.  For subjects mapped to multiple
 * category slugs the requests run in parallel and
 * results are merged, shuffled, and de-duplicated.
 *
 * Returns an array of { question, options, answer }
 * objects (same shape as quizData entries).
 *
 * Throws on network error or if fewer than 10
 * usable questions are returned.
 */
async function fetchAPIQuestions(subject) {

    const subjectSlug =
        subject.toLowerCase().replace(/\s+/g, "-");

    /* --- check Firestore cache first (24h TTL) --- */
    try {

        if (typeof db !== "undefined") {

            const cacheDoc =
                await db.collection("cachedQuestions")
                    .doc(subjectSlug)
                    .get();

            if (cacheDoc.exists) {

                const cacheData = cacheDoc.data();

                const now = Date.now();

                const fetchedAt =
                    cacheData.fetchedAt
                        ? (cacheData.fetchedAt.toMillis
                            ? cacheData.fetchedAt.toMillis()
                            : new Date(cacheData.fetchedAt).getTime())
                        : 0;

                const ONE_DAY = 24 * 60 * 60 * 1000;

                if (
                    now - fetchedAt < ONE_DAY &&
                    Array.isArray(cacheData.questions) &&
                    cacheData.questions.length >= 10
                ) {

                    console.log(`Using Firestore cached questions for ${subject}`);

                    const shuffled = [...cacheData.questions];

                    for (let i = shuffled.length - 1; i > 0; i--) {

                        const j = Math.floor(Math.random() * (i + 1));

                        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];

                    }

                    return shuffled.slice(0, 10);

                }

            }

        }

    } catch (cacheErr) {

        console.warn("Could not read Firestore question cache:", cacheErr);

    }

    const slugs =
        SUBJECT_API_MAP[subject];

    if (!slugs) {
        throw new Error(
            "No API mapping for " + subject
        );
    }

    /* --- build one fetch per slug --- */

    const fetches =
        slugs.map(slug => {

            const url =
                `${QUIZ_API_BASE}?categorySlug=${slug}&limit=20`;

            return fetch(url, {
                headers: {
                    "Authorization":
                        "Bearer " + QUIZ_API_KEY
                }
            }).then(res => {

                if (!res.ok) {
                    throw new Error(
                        `API ${res.status}`
                    );
                }

                return res.json();

            });

        });

    /* --- run in parallel, extract data arrays --- */

    const responses =
        await Promise.all(fetches);

    /*
        The API wraps questions in:
        { success: true, data: [ ...questions... ], meta: {...} }
        Each question has:
        {
            text: "...",
            answers: [
                { id, text, isCorrect: true/false },
                ...
            ]
        }
    */

    const raw = [];

    for (const res of responses) {

        if (res && res.data && Array.isArray(res.data)) {

            raw.push(...res.data);

        } else if (Array.isArray(res)) {

            /* fallback in case API returns a flat array */
            raw.push(...res);

        }

    }

    /* --- transform to internal format --- */

    const seen = new Set();

    const transformed = [];

    for (const q of raw) {

        /* question text is in 'text' or 'question' */

        const questionText =
            (q.text || q.question || "").trim();

        if (!questionText) continue;

        /* skip duplicates */

        const key =
            questionText.toLowerCase();

        if (seen.has(key)) continue;

        seen.add(key);

        /* parse answers array */

        const answers = q.answers;

        if (!answers || !Array.isArray(answers)) continue;

        const options = [];

        let correctIndex = -1;

        for (const ans of answers) {

            if (ans && ans.text) {

                if (ans.isCorrect === true) {

                    correctIndex = options.length;

                }

                options.push(ans.text);

            }

        }

        /* need at least 2 options and a correct answer */

        if (options.length < 2) continue;

        if (correctIndex === -1) continue;

        transformed.push({
            question: questionText,
            options: options,
            answer: correctIndex
        });

    }

    /* --- shuffle (Fisher–Yates) --- */

    for (
        let i = transformed.length - 1;
        i > 0;
        i--
    ) {

        const j =
            Math.floor(
                Math.random() * (i + 1)
            );

        [transformed[i], transformed[j]] =
            [transformed[j], transformed[i]];

    }

    /* --- take first 10 --- */

    if (transformed.length < 10) {

        throw new Error(
            `Only ${transformed.length} unique questions available`
        );

    }

    /* --- save to Firestore cache --- */
    try {

        if (typeof db !== "undefined") {

            db.collection("cachedQuestions")
                .doc(subjectSlug)
                .set({
                    subject: subject,
                    questions: transformed,
                    fetchedAt: firebase.firestore.FieldValue.serverTimestamp()
                })
                .then(() => {
                    console.log(`Saved ${transformed.length} questions to Firestore cache for ${subject}`);
                })
                .catch(err => {
                    console.warn("Firestore question cache write failed:", err);
                });

        }

    } catch (saveCacheErr) {

        console.warn("Could not initiate Firestore question cache write:", saveCacheErr);

    }

    return transformed.slice(0, 10);

}

/* =====================================================
   LOADING OVERLAY  &  TOAST HELPERS
===================================================== */

function showLoading(msg) {

    const overlay =
        document.getElementById(
            "loadingOverlay"
        );

    const text =
        document.getElementById(
            "loadingText"
        );

    if (msg && (msg.includes(" ") || msg.endsWith("..."))) {

        text.textContent = msg;

    } else {

        text.textContent =
            `Loading ${msg} questions...`;

    }

    overlay.classList.remove("hidden");

}

function hideLoading() {

    document.getElementById(
        "loadingOverlay"
    ).classList.add("hidden");

}

function showToast(message) {

    const toast =
        document.getElementById("toast");

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3500);

}

/* =====================================================
   VARIABLES
===================================================== */

let currentQuestion = 0;

let selectedAnswers = [];

let selectedSubject = "";

let timeLeft = 60;

let timerInterval = null;

let isRegisterMode = false;

/* =====================================================
   USER & APP STATE (Firebase)
===================================================== */

let currentUser = null; // Firebase Auth user object
let userData = null;    // Firestore user document data
let quizHistory = [];   // Loaded from Firestore
let currentStreak = 0;
let bestStreak = 0;

/* =====================================================
   AUTH ERROR HELPER
===================================================== */

function getAuthErrorMessage(code) {

    switch (code) {

        case "auth/invalid-email":
            return "Please enter a valid email address.";

        case "auth/user-disabled":
            return "This account has been disabled.";

        case "auth/user-not-found":
            return "No account found with this email. Please register.";

        case "auth/wrong-password":
            return "Incorrect password. Please try again.";

        case "auth/invalid-credential":
            return "Invalid email or password. Please check your credentials.";

        case "auth/email-already-in-use":
            return "An account with this email already exists. Please login.";

        case "auth/weak-password":
            return "Password should be at least 6 characters.";

        case "auth/operation-not-allowed":
            return "Email/Password sign-in is disabled in Firebase Console. Please enable it under Authentication > Sign-in method.";

        case "auth/network-request-failed":
            return "Network error. Please check your internet connection.";

        default:
            return null;

    }

}

/* =====================================================
   AUTH MODE
===================================================== */

function toggleAuth() {

    isRegisterMode =
        !isRegisterMode;

    const title =
        document.getElementById("authTitle");

    const subtitle =
        document.getElementById("authSubtitle");

    const nameGroup =
        document.getElementById("nameGroup");

    const button =
        document.querySelector(".full-btn");

    const switchText =
        document.getElementById("switchText");

    if (isRegisterMode) {

        title.textContent =
            "Create Account";

        subtitle.textContent =
            "Join QuizMaster and start learning.";

        nameGroup.classList.remove("hidden");

        button.textContent =
            "Create Account 🚀";

        switchText.textContent =
            "Already have an account?";

        document.querySelector(
            ".switch-auth button"
        ).textContent = "Login";

    } else {

        title.textContent =
            "Welcome Back!";

        subtitle.textContent =
            "Login to continue your learning journey.";

        nameGroup.classList.add("hidden");

        button.textContent =
            "Login 🚀";

        switchText.textContent =
            "Don't have an account?";

        document.querySelector(
            ".switch-auth button"
        ).textContent = "Register";

    }

    document.getElementById("authError")
        .textContent = "";

}

/* =====================================================
   LOGIN / REGISTER (Firebase Auth)
===================================================== */

async function handleAuth() {

    const email =
        document.getElementById("username")
            .value.trim();

    const password =
        document.getElementById("password")
            .value.trim();

    const error =
        document.getElementById("authError");

    if (!email || !password) {

        error.style.color = "#ef4444";
        error.textContent =
            "Please enter email and password.";

        return;

    }

    if (isRegisterMode) {

        const name =
            document.getElementById("registerName")
                .value.trim();

        if (!name) {

            error.style.color = "#ef4444";
            error.textContent =
                "Please enter your full name.";

            return;

        }

        try {

            showLoading("Creating your account...");

            const credential =
                await auth.createUserWithEmailAndPassword(email, password);

            const user = credential.user;

            await user.updateProfile({
                displayName: name
            });

            // Initialize user doc in Firestore
            const initialDoc = {
                name: name,
                email: email,
                currentStreak: 0,
                bestStreak: 0,
                totalQuizzes: 0,
                averageScore: 0,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            await db.collection("users").doc(user.uid).set(initialDoc);

            hideLoading();

            error.style.color = "#16a34a";
            error.textContent = "Account created successfully!";

            // onAuthStateChanged will load user data and show the app

        } catch (err) {

            hideLoading();

            console.error("Registration error:", err);

            error.style.color = "#ef4444";

            error.textContent =
                getAuthErrorMessage(err.code) || err.message;

        }

    } else {

        try {

            showLoading("Signing in...");

            await auth.signInWithEmailAndPassword(email, password);

            hideLoading();

            // onAuthStateChanged will load user data and show the app

        } catch (err) {

            hideLoading();

            console.error("Login error:", err);

            error.style.color = "#ef4444";

            error.textContent =
                getAuthErrorMessage(err.code) || err.message;

        }

    }

}

/* =====================================================
   LOAD USER DATA (Firestore)
===================================================== */

async function loadUserData(user) {

    currentUser = user;

    try {

        const docRef = db.collection("users").doc(user.uid);
        const docSnap = await docRef.get();

        if (docSnap.exists) {

            userData = {
                uid: user.uid,
                ...docSnap.data()
            };

        } else {

            // Create initial user doc if missing
            userData = {
                uid: user.uid,
                name: user.displayName || user.email.split("@")[0],
                email: user.email,
                currentStreak: 0,
                bestStreak: 0,
                totalQuizzes: 0,
                averageScore: 0,
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            };

            await docRef.set(userData);

        }

        currentStreak = userData.currentStreak || 0;
        bestStreak = userData.bestStreak || 0;

        // Fetch user quiz history from Firestore
        try {

            const historySnap = await db.collection("quizHistory")
                .where("userId", "==", user.uid)
                .get();

            quizHistory = [];

            historySnap.forEach(doc => {

                quizHistory.push({
                    id: doc.id,
                    ...doc.data()
                });

            });

            // Sort chronologically so displayHistory reverse() shows latest first
            quizHistory.sort((a, b) => {

                const tA =
                    a.timestamp && a.timestamp.toMillis
                        ? a.timestamp.toMillis()
                        : (a.date ? new Date(a.date).getTime() : 0);

                const tB =
                    b.timestamp && b.timestamp.toMillis
                        ? b.timestamp.toMillis()
                        : (b.date ? new Date(b.date).getTime() : 0);

                return tA - tB;

            });

        } catch (histErr) {

            console.warn("Could not fetch quiz history from Firestore:", histErr);

            quizHistory = [];

        }

        // Update UI
        document.getElementById("studentName")
            .textContent = userData.name || "Student";

        document.getElementById("navUser")
            .textContent = userData.name || "Student";

        document.getElementById("loginPage")
            .classList.add("hidden");

        document.getElementById("app")
            .classList.remove("hidden");

        showPage("dashboard");

    } catch (err) {

        console.error("Error loading user profile from Firestore:", err);

        showToast("⚠️ Could not load profile from cloud");

    }

}

/* =====================================================
   LOGOUT (Firebase Auth)
===================================================== */

async function logout() {

    clearInterval(timerInterval);

    try {

        await auth.signOut();

    } catch (err) {

        console.warn("SignOut error:", err);

    }

    currentUser = null;
    userData = null;
    quizHistory = [];
    currentStreak = 0;
    bestStreak = 0;

    document.getElementById("app")
        .classList.add("hidden");

    document.getElementById("loginPage")
        .classList.remove("hidden");

    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("authError").textContent = "";

}

/* =====================================================
   PAGE NAVIGATION
===================================================== */

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });

    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add("active");
    }

    window.scrollTo(0, 0);

    updateDashboard();

    if (pageId === "history") {

        displayHistory();

    } else if (pageId === "leaderboard") {

        displayLeaderboard();

    }

}

/* =====================================================
   SUBJECT SELECTION  (async – fetches from API)
===================================================== */

/*
    Keep a copy of the original hardcoded questions
    so we can restore them after each quiz.
*/
const fallbackQuizData = {};

Object.keys(quizData).forEach(subj => {

    fallbackQuizData[subj] =
        [...quizData[subj]];

});

async function selectSubject(subject) {

    selectedSubject = subject;

    showLoading(subject);

    try {

        const apiQuestions =
            await fetchAPIQuestions(subject);

        /* replace with fresh API questions */

        quizData[subject] = apiQuestions;

    } catch (err) {

        console.warn(
            "API fetch failed, using fallback:",
            err.message
        );

        /* restore original hardcoded questions */

        quizData[subject] =
            [...fallbackQuizData[subject]];

        showToast(
            "⚠️ Using practice questions (API unavailable)"
        );

    }

    hideLoading();

    startSelectedQuiz();

}

/* =====================================================
   START QUIZ
===================================================== */

function startSelectedQuiz() {

    if (!selectedSubject) {

        showPage("subjects");

        return;

    }

    currentQuestion = 0;

    selectedAnswers =
        new Array(
            quizData[selectedSubject].length
        ).fill(null);

    timeLeft = 60;

    document.getElementById("quizSubject")
        .textContent =
        selectedSubject;

    showPage("quiz");

    startTimer();

    loadQuestion();

}

/* =====================================================
   TIMER
===================================================== */

function startTimer() {

    clearInterval(timerInterval);

    document.getElementById("timer")
        .textContent =
        timeLeft;

    timerInterval =
        setInterval(() => {

            timeLeft--;

            document.getElementById("timer")
                .textContent =
                timeLeft;

            if (timeLeft <= 10) {

                document.getElementById("timer")
                    .style.color =
                    "#ef4444";

            }

            if (timeLeft <= 0) {

                clearInterval(timerInterval);

                finishQuiz();

            }

        }, 1000);

}

/* =====================================================
   LOAD QUESTION
===================================================== */

function loadQuestion() {

    const questions =
        quizData[selectedSubject];

    const question =
        questions[currentQuestion];

    document.getElementById("question")
        .textContent =
        question.question;

    document.getElementById("questionNumber")
        .textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const progress =
        ((currentQuestion + 1) /
            questions.length) * 100;

    document.getElementById("quizProgress")
        .style.width =
        progress + "%";

    const optionsContainer =
        document.getElementById("options");

    optionsContainer.innerHTML = "";

    question.options.forEach(
        (option, index) => {

            const div =
                document.createElement("div");

            div.className =
                "option";

            div.textContent =
                `${String.fromCharCode(65 + index)}. ${option}`;

            if (
                selectedAnswers[currentQuestion]
                === index
            ) {

                div.classList.add("selected");

            }

            div.onclick = () => {

                selectedAnswers[currentQuestion] =
                    index;

                document
                    .querySelectorAll(".option")
                    .forEach(item =>
                        item.classList.remove(
                            "selected"
                        )
                    );

                div.classList.add("selected");

            };

            optionsContainer.appendChild(div);

        }
    );

    document.getElementById("previousBtn")
        .style.visibility =
        currentQuestion === 0
            ? "hidden"
            : "visible";

    document.getElementById("nextBtn")
        .textContent =
        currentQuestion ===
        questions.length - 1
            ? "Finish Quiz 🎯"
            : "Next →";

}

/* =====================================================
   NEXT
===================================================== */

function nextQuestion() {

    if (
        selectedAnswers[currentQuestion]
        === null
    ) {

        alert(
            "Please select an answer first!"
        );

        return;

    }

    const questions =
        quizData[selectedSubject];

    if (
        currentQuestion <
        questions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    } else {

        finishQuiz();

    }

}

/* =====================================================
   PREVIOUS
===================================================== */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

}

/* =====================================================
   FINISH QUIZ
===================================================== */

async function finishQuiz() {

    clearInterval(timerInterval);

    const questions =
        quizData[selectedSubject];

    let correct = 0;

    questions.forEach(
        (question, index) => {

            if (
                selectedAnswers[index]
                === question.answer
            ) {

                correct++;

            }

        }
    );

    const score =
        Math.round(
            (correct / questions.length) * 100
        );

    const grade =
        getGrade(score);

    updateStreak(score);

    const now = new Date();

    const result = {

        subject:
            selectedSubject,

        score:
            score,

        grade:
            grade,

        correct:
            correct,

        wrong:
            questions.length - correct,

        streak:
            currentStreak,

        date:
            now.toLocaleString(),

        userId:
            currentUser ? currentUser.uid : null,

        userName:
            userData ? userData.name : "Student",

        timestamp:
            firebase.firestore.FieldValue.serverTimestamp()

    };

    quizHistory.push(result);

    // Save result to Firestore
    if (currentUser && typeof db !== "undefined") {

        try {

            await db.collection("quizHistory").add(result);

            const totalQuizzes = quizHistory.length;

            const totalScore =
                quizHistory.reduce(
                    (sum, quiz) => sum + (quiz.score || 0),
                    0
                );

            const averageScore =
                totalQuizzes > 0
                    ? Math.round(totalScore / totalQuizzes)
                    : 0;

            await db.collection("users").doc(currentUser.uid).update({
                currentStreak: currentStreak,
                bestStreak: bestStreak,
                totalQuizzes: totalQuizzes,
                averageScore: averageScore
            });

            if (userData) {

                userData.currentStreak = currentStreak;
                userData.bestStreak = bestStreak;
                userData.totalQuizzes = totalQuizzes;
                userData.averageScore = averageScore;

            }

        } catch (saveErr) {

            console.error("Error saving quiz result to Firestore:", saveErr);

            showToast("⚠️ Could not sync quiz result to cloud");

        }

    }

    showResult(result);

}

/* =====================================================
   GRADE SYSTEM
===================================================== */

function getGrade(score) {

    if (score >= 90)
        return "A+";

    if (score >= 80)
        return "A";

    if (score >= 70)
        return "B+";

    if (score >= 60)
        return "B";

    if (score >= 50)
        return "C";

    return "F";

}

/* =====================================================
   STREAK SYSTEM
===================================================== */

function updateStreak(score) {

    /*
        90-100 = +2
        75-89  = +1
        50-74  = maintain
        Below50 = reset
    */

    if (score >= 90) {

        currentStreak += 2;

    }

    else if (score >= 75) {

        currentStreak += 1;

    }

    else if (score >= 50) {

        // Streak maintained
        currentStreak =
            currentStreak;

    }

    else {

        currentStreak = 0;

    }

    if (
        currentStreak >
        bestStreak
    ) {

        bestStreak =
            currentStreak;

    }

}

/* =====================================================
   SHOW RESULT
===================================================== */

function showResult(result) {

    document.getElementById("resultSubject")
        .textContent =
        result.subject;

    document.getElementById("finalScore")
        .textContent =
        result.score + "%";

    document.getElementById("finalGrade")
        .textContent =
        result.grade;

    document.getElementById("correctAnswers")
        .textContent =
        result.correct;

    document.getElementById("wrongAnswers")
        .textContent =
        result.wrong;

    document.getElementById("finalStreak")
        .textContent =
        result.streak;

    let message;

    if (result.score >= 90) {

        message =
            "🔥 Outstanding! You are absolutely on fire!";

        createConfetti();

    }

    else if (result.score >= 80) {

        message =
            "🌟 Excellent performance! Keep going!";

    }

    else if (result.score >= 70) {

        message =
            "🚀 Great job! Your knowledge is improving.";

    }

    else if (result.score >= 50) {

        message =
            "👍 Good effort! Practice more to improve.";

    }

    else {

        message =
            "💪 Don't give up! Try again and improve.";

    }

    document.getElementById("resultMessage")
        .textContent =
        message;

    showPage("result");

}

/* =====================================================
   DASHBOARD
===================================================== */

function updateDashboard() {

    if (!userData)
        return;

    document.getElementById("currentStreak")
        .textContent =
        currentStreak;

    document.getElementById("bestStreak")
        .textContent =
        bestStreak;

    document.getElementById("quizCount")
        .textContent =
        quizHistory.length;

    let average = 0;

    if (quizHistory.length > 0) {

        const total =
            quizHistory.reduce(
                (sum, quiz) =>
                    sum + quiz.score,
                0
            );

        average =
            Math.round(
                total / quizHistory.length
            );

    }

    document.getElementById("averageScore")
        .textContent =
        average + "%";

    document.getElementById("heroGrade")
        .textContent =
        average > 0
            ? getGrade(average)
            : "-";

    document.getElementById("streakDisplay")
        .textContent =
        currentStreak;

    const progress =
        Math.min(
            (currentStreak / 10) * 100,
            100
        );

    document.getElementById("streakProgress")
        .style.width =
        progress + "%";

    updateStreakMessage();

    updateBadges();

    updateSubjectPerformance();

}

/* =====================================================
   STREAK MESSAGE
===================================================== */

function updateStreakMessage() {

    const message =
        document.getElementById(
            "streakMessage"
        );

    if (currentStreak === 0) {

        message.textContent =
            "Complete a quiz to start your streak!";

    }

    else if (currentStreak < 5) {

        message.textContent =
            `${5 - currentStreak} more streak points to unlock On Fire! 🔥`;

    }

    else if (currentStreak < 10) {

        message.textContent =
            `${10 - currentStreak} more streak points to become a Quiz Master! 👑`;

    }

    else {

        message.textContent =
            "You're officially a Quiz Master! 👑🔥";

    }

}

/* =====================================================
   SUBJECT PERFORMANCE
===================================================== */

function updateSubjectPerformance() {

    const container =
        document.getElementById(
            "subjectPerformance"
        );

    container.innerHTML = "";

    Object.keys(quizData)
        .forEach(subject => {

            const attempts =
                quizHistory.filter(
                    quiz =>
                        quiz.subject === subject
                );

            let average = 0;

            if (attempts.length > 0) {

                average =
                    Math.round(
                        attempts.reduce(
                            (sum, quiz) =>
                                sum + quiz.score,
                            0
                        ) / attempts.length
                    );

            }

            const card =
                document.createElement("div");

            card.className =
                "performance-card";

            card.innerHTML = `

                <h3>${subject}</h3>

                <div class="performance-score">
                    ${average}%
                </div>

                <p>
                    ${attempts.length}
                    quiz${attempts.length === 1 ? "" : "zes"}
                    completed
                </p>

            `;

            container.appendChild(card);

        });

}

/* =====================================================
   BADGES
===================================================== */

function updateBadges() {

    const beginner =
        document.getElementById(
            "badgeBeginner"
        );

    const perfect =
        document.getElementById(
            "badgePerfect"
        );

    const fire =
        document.getElementById(
            "badgeFire"
        );

    const master =
        document.getElementById(
            "badgeMaster"
        );

    if (quizHistory.length >= 1) {

        unlockBadge(beginner);

    }

    if (
        quizHistory.some(
            quiz =>
                quiz.score === 100
        )
    ) {

        unlockBadge(perfect);

    }

    if (currentStreak >= 5) {

        unlockBadge(fire);

    }

    if (currentStreak >= 10) {

        unlockBadge(master);

    }

}

function unlockBadge(element) {

    element.classList.remove(
        "locked"
    );

    element.classList.add(
        "unlocked"
    );

}

/* =====================================================
   HISTORY
===================================================== */

function displayHistory() {

    const container =
        document.getElementById(
            "historyList"
        );

    if (quizHistory.length === 0) {

        container.innerHTML = `

            <div class="empty-history">

                No quizzes completed yet.
                Start your first quiz! 🚀

            </div>

        `;

        return;

    }

    container.innerHTML = "";

    [...quizHistory]
        .reverse()
        .forEach(
            (quiz, index) => {

                const item =
                    document.createElement(
                        "div"
                    );

                item.className =
                    "history-item";

                item.innerHTML = `

                    <div>

                        <strong>
                            ${quiz.subject}
                        </strong>

                        <div class="history-date">
                            ${quiz.date}
                        </div>

                    </div>

                    <div>

                        <div class="history-score">
                            ${quiz.score}%
                        </div>

                        <small>
                            Grade ${quiz.grade}
                        </small>

                    </div>

                    <div>

                        ✓ ${quiz.correct}
                        &nbsp;&nbsp;

                        ✗ ${quiz.wrong}

                        <br>

                        🔥 ${quiz.streak}

                    </div>

                `;

                container.appendChild(
                    item
                );

            }
        );

}

/* =====================================================
   DARK MODE
===================================================== */

function toggleTheme() {

    document.body
        .classList.toggle("dark");

    const darkMode =
        document.body
            .classList
            .contains("dark");

    localStorage.setItem(
        "darkMode",
        darkMode
    );

}

if (
    localStorage.getItem(
        "darkMode"
    ) === "true"
) {

    document.body
        .classList
        .add("dark");

}

/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

    const container =
        document.getElementById(
            "confetti"
        );

    container.innerHTML = "";

    for (
        let i = 0;
        i < 80;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );

        piece.className =
            "confetti-piece";

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.background =
            `hsl(
                ${Math.random() * 360},
                80%,
                60%
            )`;

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        container.appendChild(
            piece
        );

    }

    setTimeout(
        () => {

            container.innerHTML = "";

        },
        4000
    );

}

/* =====================================================
   LEADERBOARD (Firestore)
===================================================== */

async function displayLeaderboard() {

    const container =
        document.getElementById("leaderboardList");

    if (!container) return;

    container.innerHTML = `
        <div class="leaderboard-empty">
            Loading leaderboard... ⏳
        </div>
    `;

    try {

        const snapshot = await db.collection("users")
            .orderBy("averageScore", "desc")
            .limit(10)
            .get();

        if (snapshot.empty) {

            container.innerHTML = `
                <div class="leaderboard-empty">
                    No leaderboard data available yet. Complete a quiz to appear here! 🚀
                </div>
            `;

            return;

        }

        let html = `
            <table class="leaderboard-table">
                <thead>
                    <tr>
                        <th style="width: 80px;">Rank</th>
                        <th>Student</th>
                        <th style="text-align: center;">Quizzes</th>
                        <th style="text-align: center;">Streak</th>
                        <th style="text-align: right;">Avg Score</th>
                    </tr>
                </thead>
                <tbody>
        `;

        let rank = 1;

        snapshot.forEach(doc => {

            const data = doc.data();

            const isCurrentUser =
                currentUser && currentUser.uid === doc.id;

            const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };

            const rankDisplay =
                medals[rank] ? `${medals[rank]} ${rank}` : rank;

            const initial =
                (data.name || "S").charAt(0).toUpperCase();

            html += `
                <tr class="${isCurrentUser ? 'current-user-row' : ''}">
                    <td>
                        <div class="leaderboard-rank leaderboard-rank-${rank}">
                            ${rankDisplay}
                        </div>
                    </td>
                    <td>
                        <span class="leaderboard-avatar">${initial}</span>
                        <strong>${data.name || 'Student'}</strong>
                        ${isCurrentUser ? ' <small style="color:var(--primary); font-weight: 700;">(You)</small>' : ''}
                    </td>
                    <td style="text-align: center;">
                        ${data.totalQuizzes || 0}
                    </td>
                    <td style="text-align: center;">
                        🔥 ${data.currentStreak || 0}
                    </td>
                    <td style="text-align: right; font-weight: 800; color: var(--primary);">
                        ${data.averageScore || 0}%
                    </td>
                </tr>
            `;

            rank++;

        });

        html += `
                </tbody>
            </table>
        `;

        container.innerHTML = html;

    } catch (err) {

        console.error("Error loading leaderboard:", err);

        container.innerHTML = `
            <div class="leaderboard-empty">
                ⚠️ Could not load leaderboard. (${err.message})
            </div>
        `;

    }

}

/* =====================================================
   AUTH STATE LISTENER (Firebase Auth)
===================================================== */

if (typeof auth !== "undefined") {

    auth.onAuthStateChanged(async (user) => {

        if (user) {

            showLoading("Loading your profile...");

            await loadUserData(user);

            hideLoading();

        } else {

            // Only show loginPage if not in teacher portal or student live quiz
            if (!currentTeacher && !currentStudentLiveSession) {

                document.getElementById("app")
                    .classList.add("hidden");

                document.getElementById("loginPage")
                    .classList.remove("hidden");

            }

        }

    });

}

/* ==========================================================================
   ==========================================================================
   KAHOOT-STYLE LIVE QUIZ COMPETITION & TEACHER PORTAL MODULE
   ==========================================================================
   ========================================================================== */

/* =====================================================
   GLOBAL STATE FOR LIVE COMPETITION & TEACHER PORTAL
===================================================== */

let currentTeacher = null;
let isTeacherRegisterMode = false;
let activeHostCompetition = null; // Currently hosted competition object
let activeCompetitionQuestionsList = []; // Array of questions for active competition
let activeCurrentRoundDoc = null; // Active round document metadata

// Firestore listener unsubscriptions
let teacherUnsubCompetition = null;
let teacherUnsubParticipants = null;
let teacherUnsubAnswers = null;
let studentUnsubCompetition = null;
let studentUnsubRound = null;
let studentUnsubParticipants = null;

let currentStudentLiveSession = null; // Active joined student session
let studentSubmittedAnswer = false;
let studentCurrentQuestionIndex = -1;

let liveTimerInterval = null;
let liveTimeRemaining = 60;
let liveBroadcastChannel = null;

/* Default Demo Teacher Account */
const DEFAULT_TEACHER = {
    uid: "teacher_demo_001",
    teacherId: "TCH001",
    name: "Prof. Educator",
    email: "teacher@skillquest.edu",
    department: "Information Technology",
    role: "teacher",
    status: "active",
    phone: "+1 (555) 019-2834",
    profileImage: "",
    subjects: ["Java", "Python", "SQL", "DBMS", "Web Development", "DSA"]
};

/* =====================================================
   PORTAL NAVIGATION & SWITCHING
===================================================== */

function hideAllPortals() {
    // Hide student standard app
    const app = document.getElementById("app");
    if (app) app.classList.add("hidden");

    // Hide student login
    const loginPage = document.getElementById("loginPage");
    if (loginPage) loginPage.classList.add("hidden");

    // Hide teacher auth
    const teacherAuthPage = document.getElementById("teacherAuthPage");
    if (teacherAuthPage) teacherAuthPage.classList.add("hidden");

    // Hide teacher app
    const teacherApp = document.getElementById("teacherApp");
    if (teacherApp) teacherApp.classList.add("hidden");

    // Hide student live app
    const studentLiveApp = document.getElementById("studentLiveApp");
    if (studentLiveApp) studentLiveApp.classList.add("hidden");
}

function openTeacherAuth() {
    hideAllPortals();
    const page = document.getElementById("teacherAuthPage");
    if (page) {
        page.classList.remove("hidden");
        document.getElementById("teacherAuthError").textContent = "";
    }
}

function openStudentPortal() {
    hideAllPortals();
    if (currentUser) {
        document.getElementById("app").classList.remove("hidden");
        showPage("dashboard");
    } else {
        document.getElementById("loginPage").classList.remove("hidden");
    }
}

function toggleTeacherAuthMode() {
    isTeacherRegisterMode = !isTeacherRegisterMode;
    const heading = document.getElementById("teacherAuthHeading");
    const subtitle = document.getElementById("teacherAuthSubtitle");
    const regFields = document.getElementById("teacherRegisterFields");
    const submitBtn = document.getElementById("teacherAuthSubmitBtn");
    const switchText = document.getElementById("teacherSwitchText");
    const demoRow = document.getElementById("teacherDemoQuickRow");
    const emailLabel = document.getElementById("teacherEmailLabel");

    if (isTeacherRegisterMode) {
        if (heading) heading.textContent = "Teacher Registration";
        if (subtitle) subtitle.textContent = "Create an educator account to host live quizzes.";
        if (regFields) regFields.classList.remove("hidden");
        if (submitBtn) submitBtn.textContent = "Register & Enter Portal 🚀";
        if (switchText) switchText.textContent = "Already have a teacher account?";
        if (demoRow) demoRow.classList.add("hidden");
        if (emailLabel) emailLabel.textContent = "Teacher Email (for login)";
    } else {
        if (heading) heading.textContent = "Teacher Sign In";
        if (subtitle) subtitle.textContent = "Access your QuizMaster competition hub.";
        if (regFields) regFields.classList.add("hidden");
        if (submitBtn) submitBtn.textContent = "Access Teacher Portal 🚀";
        if (switchText) switchText.textContent = "Need a new teacher account?";
        if (demoRow) demoRow.classList.remove("hidden");
        if (emailLabel) emailLabel.textContent = "Teacher Email / ID";
    }
}

function quickFillTeacherDemo() {
    document.getElementById("teacherId").value = "teacher@skillquest.edu";
    document.getElementById("teacherPassword").value = "admin123";
    showToast("✨ Filled Demo Teacher Credentials!");
}

/* =====================================================
   TEACHER AUTHENTICATION (Firebase Auth & Firestore)
===================================================== */

async function handleTeacherLogin() {
    const errElem = document.getElementById("teacherAuthError");
    errElem.textContent = "";

    if (isTeacherRegisterMode) {
        await handleTeacherRegister();
        return;
    }

    const emailInput = document.getElementById("teacherId").value.trim();
    const passInput = document.getElementById("teacherPassword").value.trim();

    if (!emailInput || !passInput) {
        errElem.textContent = "Please enter both Email / Teacher ID and Password.";
        return;
    }

    showLoading("Authenticating Teacher...");

    try {
        let authUser = null;
        let teacherProfile = null;

        const isDemo = (emailInput.toLowerCase() === "teacher@skillquest.edu" || emailInput.toUpperCase() === "TEACHER-01" || emailInput.toUpperCase() === "TCH001") && passInput === "admin123";
        const targetEmail = isDemo ? "teacher@skillquest.edu" : emailInput;

        if (typeof auth !== "undefined") {
            try {
                const cred = await auth.signInWithEmailAndPassword(targetEmail, passInput);
                authUser = cred.user;
            } catch (authErr) {
                if (isDemo && (authErr.code === "auth/user-not-found" || authErr.code === "auth/invalid-credential" || authErr.code === "auth/wrong-password")) {
                    try {
                        const newCred = await auth.createUserWithEmailAndPassword("teacher@skillquest.edu", "admin123");
                        authUser = newCred.user;
                        await authUser.updateProfile({ displayName: "Prof. Educator" });
                    } catch (createErr) {
                        console.warn("Demo teacher creation note:", createErr);
                    }
                } else {
                    throw authErr;
                }
            }
        }

        const teacherUid = authUser ? authUser.uid : (isDemo ? "teacher_demo_001" : `teacher_${emailInput.replace(/[^a-zA-Z0-9]/g, "_")}`);

        if (typeof db !== "undefined") {
            try {
                const docRef = db.collection("teachers").doc(teacherUid);
                const docSnap = await docRef.get();

                if (docSnap.exists) {
                    const data = docSnap.data();
                    if (data.role !== "teacher" || data.status !== "active") {
                        hideLoading();
                        errElem.textContent = "Access denied: Account is not an active teacher.";
                        if (auth) auth.signOut();
                        return;
                    }
                    teacherProfile = { ...data, uid: teacherUid };
                    await docRef.update({
                        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
                    });
                } else {
                    const newProfile = {
                        uid: teacherUid,
                        name: (authUser && authUser.displayName) || (isDemo ? "Prof. Educator" : emailInput.split("@")[0]),
                        email: targetEmail,
                        teacherId: isDemo ? "TCH001" : `TCH${Math.floor(100 + Math.random() * 900)}`,
                        department: "Information Technology",
                        role: "teacher",
                        status: "active",
                        phone: "",
                        profileImage: "",
                        subjects: ["Java", "Python", "SQL", "DBMS", "Web Development", "DSA"],
                        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                        lastLogin: firebase.firestore.FieldValue.serverTimestamp()
                    };
                    await docRef.set(newProfile);
                    teacherProfile = newProfile;
                }
            } catch (dbErr) {
                console.warn("Firestore teacher fetch note:", dbErr);
                teacherProfile = {
                    uid: teacherUid,
                    name: isDemo ? "Prof. Educator" : emailInput.split("@")[0],
                    email: targetEmail,
                    teacherId: "TCH001",
                    department: "Information Technology",
                    role: "teacher",
                    status: "active",
                    subjects: ["Java", "Python", "SQL", "DBMS", "Web Development", "DSA"]
                };
            }
        } else {
            teacherProfile = { ...DEFAULT_TEACHER, uid: teacherUid };
        }

        currentTeacher = teacherProfile;
        localStorage.setItem("skillquest_teacher", JSON.stringify(currentTeacher));

        hideLoading();
        hideAllPortals();
        initTeacherPortalUI();
        document.getElementById("teacherApp").classList.remove("hidden");
        showTeacherPage("teacherDashboard");
        showToast(`👋 Welcome, ${currentTeacher.name}!`);

    } catch (err) {
        hideLoading();
        console.error("Teacher login error:", err);
        errElem.textContent = getAuthErrorMessage(err.code) || err.message;
    }
}

async function handleTeacherRegister() {
    const name = document.getElementById("teacherRegName").value.trim();
    const teacherIdCode = document.getElementById("teacherRegCode").value.trim();
    const dept = document.getElementById("teacherRegDept").value.trim();
    const email = document.getElementById("teacherId").value.trim();
    const password = document.getElementById("teacherPassword").value.trim();
    const errElem = document.getElementById("teacherAuthError");

    if (!name || !email || !password) {
        errElem.textContent = "Please fill in all required fields (Name, Email, Password).";
        return;
    }

    if (password.length < 6) {
        errElem.textContent = "Password must be at least 6 characters long.";
        return;
    }

    showLoading("Creating Teacher Account...");

    try {
        let authUser = null;

        if (typeof auth !== "undefined") {
            const cred = await auth.createUserWithEmailAndPassword(email, password);
            authUser = cred.user;
            await authUser.updateProfile({ displayName: name });
        }

        const uid = authUser ? authUser.uid : `teacher_${Date.now()}`;

        const teacherDoc = {
            uid: uid,
            name: name,
            email: email,
            teacherId: teacherIdCode || `TCH${Math.floor(100 + Math.random() * 900)}`,
            department: dept || "Computer Science & Engineering",
            role: "teacher",
            status: "active",
            phone: "",
            profileImage: "",
            subjects: ["Java", "Python", "SQL", "DBMS", "Web Development", "DSA"],
            createdAt: typeof firebase !== "undefined" && firebase.firestore 
                ? firebase.firestore.FieldValue.serverTimestamp() 
                : new Date().toISOString(),
            lastLogin: typeof firebase !== "undefined" && firebase.firestore 
                ? firebase.firestore.FieldValue.serverTimestamp() 
                : new Date().toISOString()
        };

        if (typeof db !== "undefined") {
            await db.collection("teachers").doc(uid).set(teacherDoc);
        }

        currentTeacher = teacherDoc;
        localStorage.setItem("skillquest_teacher", JSON.stringify(currentTeacher));

        hideLoading();
        hideAllPortals();
        initTeacherPortalUI();
        document.getElementById("teacherApp").classList.remove("hidden");
        showTeacherPage("teacherDashboard");
        showToast(`🎉 Account Created! Welcome, ${currentTeacher.name}!`);

    } catch (err) {
        hideLoading();
        console.error("Teacher register error:", err);
        errElem.textContent = getAuthErrorMessage(err.code) || err.message;
    }
}

function teacherLogout() {
    if (activeHostCompetition) {
        if (!confirm("Are you sure you want to logout? Any active competition session will be closed.")) {
            return;
        }
        cleanupActiveHostListeners();
        activeHostCompetition = null;
    }

    if (typeof auth !== "undefined") {
        try { auth.signOut(); } catch(e) {}
    }

    currentTeacher = null;
    localStorage.removeItem("skillquest_teacher");
    localStorage.removeItem("skillquest_active_competition");

    hideAllPortals();
    openTeacherAuth();
    showToast("Logged out of Teacher Portal.");
}

function initTeacherPortalUI() {
    if (!currentTeacher) return;

    const nameTag = document.getElementById("teacherNavUser");
    if (nameTag) nameTag.textContent = currentTeacher.name || "Professor";

    const heroName = document.getElementById("teacherHeroName");
    if (heroName) heroName.textContent = currentTeacher.name || "Professor";

    updateTeacherDashboardStats();
}

function showTeacherPage(pageId) {
    document.querySelectorAll(".teacher-page").forEach(page => {
        page.classList.remove("active");
    });

    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add("active");
    }

    // Update navbar active state
    document.querySelectorAll(".teacher-navbar nav button").forEach(btn => {
        btn.classList.remove("active");
    });

    if (pageId === "teacherDashboard") {
        const btn = document.getElementById("tNavDashboard");
        if (btn) btn.classList.add("active");
        updateTeacherDashboardStats();
    } else if (pageId === "teacherCreate") {
        const btn = document.getElementById("tNavCreate");
        if (btn) btn.classList.add("active");
        onSubjectConfigChange();
    } else if (pageId === "teacherHistory") {
        const btn = document.getElementById("tNavHistory");
        if (btn) btn.classList.add("active");
        loadTeacherCompetitionHistory();
    }

    window.scrollTo(0, 0);
}

/* =====================================================
   TEACHER PROFILE MODAL MANAGEMENT
===================================================== */

function openTeacherProfileModal() {
    if (!currentTeacher) return;

    document.getElementById("profNameInput").value = currentTeacher.name || "";
    document.getElementById("profTeacherIdInput").value = currentTeacher.teacherId || "TCH001";
    document.getElementById("profEmailInput").value = currentTeacher.email || "";
    document.getElementById("profDeptInput").value = currentTeacher.department || "";
    document.getElementById("profPhoneInput").value = currentTeacher.phone || "";
    document.getElementById("profSubjectsInput").value = Array.isArray(currentTeacher.subjects) 
        ? currentTeacher.subjects.join(", ") 
        : (currentTeacher.subjects || "Java, Python, SQL, DBMS, Web Development, DSA");
    document.getElementById("profSaveMsg").textContent = "";

    const modal = document.getElementById("teacherProfileModal");
    if (modal) modal.classList.remove("hidden");
}

function closeTeacherProfileModal() {
    const modal = document.getElementById("teacherProfileModal");
    if (modal) modal.classList.add("hidden");
}

async function saveTeacherProfile() {
    if (!currentTeacher) return;

    const name = document.getElementById("profNameInput").value.trim();
    const dept = document.getElementById("profDeptInput").value.trim();
    const phone = document.getElementById("profPhoneInput").value.trim();
    const subjectsRaw = document.getElementById("profSubjectsInput").value.trim();
    const msg = document.getElementById("profSaveMsg");

    if (!name) {
        msg.style.color = "#ef4444";
        msg.textContent = "Full Name cannot be empty.";
        return;
    }

    const subjects = subjectsRaw.split(",").map(s => s.trim()).filter(Boolean);

    currentTeacher.name = name;
    currentTeacher.department = dept;
    currentTeacher.phone = phone;
    currentTeacher.subjects = subjects;

    try {
        if (typeof db !== "undefined" && currentTeacher.uid) {
            await db.collection("teachers").doc(currentTeacher.uid).update({
                name: name,
                department: dept,
                phone: phone,
                subjects: subjects
            });
        }
        localStorage.setItem("skillquest_teacher", JSON.stringify(currentTeacher));
        initTeacherPortalUI();
        msg.style.color = "#16a34a";
        msg.textContent = "Profile updated successfully!";
        setTimeout(() => closeTeacherProfileModal(), 1200);
        showToast("✅ Profile Updated!");
    } catch (err) {
        console.error("Profile save error:", err);
        msg.style.color = "#ef4444";
        msg.textContent = "Could not save profile: " + err.message;
    }
}

/* =====================================================
   TEACHER DASHBOARD & STATS
===================================================== */

async function updateTeacherDashboardStats() {
    let history = getStoredCompetitionHistory();

    const count = history.length;
    const totalStudents = history.reduce((sum, c) => sum + (c.participantCount || 0), 0);
    const avgScore = count > 0 
        ? Math.round(history.reduce((sum, c) => sum + (c.averageScore || 75), 0) / count) 
        : 0;

    const tTotalElem = document.getElementById("teacherTotalCompetitions");
    if (tTotalElem) tTotalElem.textContent = count;

    const tCompElem = document.getElementById("tStatCompetitions");
    if (tCompElem) tCompElem.textContent = count;

    const tStudElem = document.getElementById("tStatStudents");
    if (tStudElem) tStudElem.textContent = totalStudents;

    const tAccElem = document.getElementById("tStatAvgAccuracy");
    if (tAccElem) tAccElem.textContent = `${avgScore}%`;

    // Active competition banner
    const banner = document.getElementById("activeCompetitionBanner");
    const bannerText = document.getElementById("activeCompetitionBannerText");
    if (activeHostCompetition && (activeHostCompetition.status === "waiting" || activeHostCompetition.status === "in_progress")) {
        if (banner) banner.classList.remove("hidden");
        if (bannerText) bannerText.textContent = `Room: ${activeHostCompetition.code} | Subject: ${activeHostCompetition.subject} | Status: ${activeHostCompetition.status.toUpperCase()}`;
    } else {
        if (banner) banner.classList.add("hidden");
    }
}

function resumeActiveCompetition() {
    if (!activeHostCompetition) return;

    if (activeHostCompetition.status === "waiting") {
        showTeacherPage("teacherWaitingRoom");
    } else if (activeHostCompetition.status === "in_progress") {
        showTeacherPage("teacherLiveQuiz");
    } else if (activeHostCompetition.status === "question_result") {
        showTeacherPage("teacherResult");
    } else if (activeHostCompetition.status === "leaderboard") {
        showTeacherPage("teacherLeaderboard");
    }
}

function quickCreateCompetition(subject) {
    showTeacherPage("teacherCreate");
    const select = document.getElementById("compSubjectSelect");
    if (select) {
        select.value = subject;
        onSubjectConfigChange();
    }
}

/* =====================================================
   COMPETITION CREATOR & QUESTION REVIEW
===================================================== */

let generatedCompetitionQuestions = [];

function onSubjectConfigChange() {
    const subject = document.getElementById("compSubjectSelect").value;
    const count = parseInt(document.getElementById("compQuestionCountSelect").value, 10) || 5;

    // Build question pool
    let pool = quizData[subject] ? [...quizData[subject]] : [];
    if (pool.length === 0 && fallbackQuizData[subject]) {
        pool = [...fallbackQuizData[subject]];
    }

    // If needed, generate extra high-quality questions for larger sets (15-20)
    if (pool.length < count) {
        pool = expandQuestionPool(subject, pool, count);
    }

    // Shuffle and pick `count` questions
    const shuffled = [...pool].sort(() => 0.5 - Math.random());
    generatedCompetitionQuestions = shuffled.slice(0, count);

    renderQuestionReviewList();
}

function generateRandomQuestionSet() {
    onSubjectConfigChange();
    showToast("🎲 Generated a fresh set of questions!");
}

function expandQuestionPool(subject, existingPool, targetCount) {
    const pool = [...existingPool];
    let i = 1;
    while (pool.length < targetCount) {
        pool.push({
            question: `${subject} Advanced Challenge #${i}: Which of the following is considered a best practice in ${subject}?`,
            options: [
                `Optimizing memory and resource allocation in ${subject}`,
                `Ignoring exceptions and errors silently`,
                `Hardcoding configuration parameters into source files`,
                `Bypassing data validation rules`
            ],
            answer: 0
        });
        i++;
    }
    return pool;
}

function renderQuestionReviewList() {
    const listContainer = document.getElementById("questionReviewList");
    const badge = document.getElementById("reviewCountBadge");
    if (!listContainer) return;

    if (badge) badge.textContent = generatedCompetitionQuestions.length;

    listContainer.innerHTML = "";

    generatedCompetitionQuestions.forEach((q, idx) => {
        const item = document.createElement("div");
        item.className = "review-q-item";

        let optionsHtml = "";
        q.options.forEach((opt, optIdx) => {
            const isCorrect = optIdx === q.answer;
            optionsHtml += `
                <div class="review-opt ${isCorrect ? 'is-correct' : ''}">
                    <strong>${String.fromCharCode(65 + optIdx)}.</strong> ${opt} ${isCorrect ? ' ✓ (Correct)' : ''}
                </div>
            `;
        });

        item.innerHTML = `
            <div class="review-q-header">
                <span class="q-badge-mini">Q${idx + 1}</span>
                <div class="review-q-title">${q.question}</div>
            </div>
            <div class="review-options-grid">
                ${optionsHtml}
            </div>
        `;

        listContainer.appendChild(item);
    });
}

/* =====================================================
   LAUNCH COMPETITION & GENERATE CODE + QR
===================================================== */

function generateCompetitionCode() {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `SKQ-${randomNum}`;
}

/**
 * Safely normalize any question format into Kahoot-style:
 * { question: string, options: [string, string, string, string], answer: number (0..3) }
 */
function normalizeLiveQuestion(q) {
    if (!q) return null;

    const questionText = (q.question || q.title || q.text || q.prompt || "Question").toString().trim();

    let rawOptions = [];
    if (Array.isArray(q.options)) {
        rawOptions = q.options;
    } else if (q.options && typeof q.options === "object") {
        rawOptions = [q.options.a || q.options[0], q.options.b || q.options[1], q.options.c || q.options[2], q.options.d || q.options[3]];
    } else if (q.answers && typeof q.answers === "object") {
        rawOptions = [q.answers.answer_a, q.answers.answer_b, q.answers.answer_c, q.answers.answer_d];
    }

    const options = [];
    for (let i = 0; i < 4; i++) {
        const val = rawOptions[i];
        if (typeof val === "object" && val !== null) {
            options.push((val.text || val.option || `Option ${String.fromCharCode(65 + i)}`).toString().trim());
        } else if (val !== undefined && val !== null && String(val).trim() !== "") {
            options.push(String(val).trim());
        } else {
            options.push(`Option ${String.fromCharCode(65 + i)}`);
        }
    }

    let answerIndex = 0;
    if (typeof q.answer === "number" && q.answer >= 0 && q.answer <= 3) {
        answerIndex = q.answer;
    } else if (typeof q.answer === "string") {
        const trimmed = q.answer.trim();
        if (/^[0-3]$/.test(trimmed)) {
            answerIndex = parseInt(trimmed, 10);
        } else if (/^[A-Da-d]$/.test(trimmed)) {
            answerIndex = trimmed.toUpperCase().charCodeAt(0) - 65;
        } else {
            const foundIdx = options.findIndex(opt => opt.toLowerCase() === trimmed.toLowerCase());
            if (foundIdx !== -1) answerIndex = foundIdx;
        }
    } else if (typeof q.correctAnswer === "number" || typeof q.correct_answer === "number") {
        answerIndex = parseInt(q.correctAnswer || q.correct_answer, 10) || 0;
    } else if (typeof q.correctAnswer === "string" || typeof q.correct_answer === "string") {
        const ca = (q.correctAnswer || q.correct_answer).trim();
        if (/^[0-3]$/.test(ca)) {
            answerIndex = parseInt(ca, 10);
        } else if (/^[A-Da-d]$/.test(ca)) {
            answerIndex = ca.toUpperCase().charCodeAt(0) - 65;
        } else {
            const foundIdx = options.findIndex(opt => opt.toLowerCase() === ca.toLowerCase());
            if (foundIdx !== -1) answerIndex = foundIdx;
        }
    }

    if (answerIndex < 0 || answerIndex > 3 || isNaN(answerIndex)) {
        answerIndex = 0;
    }

    return {
        question: questionText,
        options: options,
        answer: answerIndex
    };
}

/**
 * Sanitize questions array for Firestore:
 * - removes undefined/null values from options
 * - ensures answer index is a number
 * - returns a plain serializable array
 */
function sanitizeQuestionsForFirestore(questions) {
    return (questions || []).map(normalizeLiveQuestion).filter(Boolean);
}

async function launchCompetitionLobby() {
    if (generatedCompetitionQuestions.length === 0) {
        onSubjectConfigChange();
    }

    const subject = document.getElementById("compSubjectSelect").value;
    const code = generateCompetitionCode();
    const count = generatedCompetitionQuestions.length;
    const createdAtISO = new Date().toISOString();
    const expiresAtISO = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    const sanitizedQuestions = sanitizeQuestionsForFirestore(generatedCompetitionQuestions);
    const creatorName = currentTeacher ? (currentTeacher.name || currentTeacher.email || currentTeacher.teacherId || "Prof. Educator") : "Staff";

    if (sanitizedQuestions.length === 0) {
        showToast("⚠️ Please select questions before launching competition.");
        return;
    }

    showLoading("Creating & Saving Competition Room...");

    const competitionData = {
        competitionCode: code,
        code: code,
        title: `${subject} Live Battle`,
        subject: subject,
        competitionType: "auto",
        createdBy: creatorName,
        teacherId: currentTeacher ? (currentTeacher.teacherId || currentTeacher.uid || "TEACHER-01") : "TEACHER-01",
        teacherName: currentTeacher ? currentTeacher.name : creatorName,
        status: "active",
        phase: "waiting",
        temporaryQuestions: sanitizedQuestions,
        questions: sanitizedQuestions,
        totalQuestions: count,
        currentQuestionIndex: 0,
        questionStartTime: null,
        questionStartedAt: null,
        questionEndedAt: null,
        questionDuration: 60,
        participantCount: 0,
        participants: {},
        answersSummary: {},
        isStaffCreated: false,
        createdAt: createdAtISO,
        expiresAt: expiresAtISO
    };

    // Strict Firestore verification: Verify db is available
    if (typeof db === "undefined" || !db) {
        hideLoading();
        console.error("[SKQ Teacher] Firestore database instance (db) is not initialized!");
        alert("⚠️ Database connection error: Firestore is not initialized. Please refresh the page and ensure your internet connection is active.");
        return;
    }

    // Save to Firestore and confirm write succeeded
    try {
        const firestorePayload = {
            ...competitionData,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        console.log("[SKQ Teacher] Saving competition document to Firestore:", {
            competitionCode: code,
            documentId: code,
            collection: "liveCompetitions",
            status: "saving"
        });

        await db.collection("liveCompetitions").doc(code).set(firestorePayload);

        // Verify document was actually written to Firestore
        const verifySnap = await db.collection("liveCompetitions").doc(code).get();
        if (!verifySnap.exists) {
            throw new Error(`Document verification failed: Room "${code}" was not found in Firestore after write operation.`);
        }

        // Safe debugging log
        console.log({
            competitionCode: code,
            documentId: code,
            collection: "liveCompetitions",
            status: "saved"
        });

    } catch (dbErr) {
        console.error("[SKQ Teacher] Firestore write FAILED:", dbErr);
        hideLoading();
        alert(`⚠️ Failed to save competition room to database: ${dbErr.message || dbErr}. Please try again.`);
        return;
    }

    // ONLY after Firestore write is confirmed: Set active competition in memory
    activeHostCompetition = competitionData;
    try { localStorage.setItem("skillquest_active_competition", JSON.stringify(activeHostCompetition)); } catch(e) {}

    // Broadcast setup for multi-tab/same-device synchronization
    setupBroadcastChannel(code);
    broadcastLiveEvent({ type: "ROOM_CREATED", competition: competitionData });

    hideLoading();

    // Render Waiting Room UI & QR Code ONLY after successful database write
    setupTeacherWaitingRoomUI(competitionData);
    showTeacherPage("teacherWaitingRoom");
    showToast(`🎉 Room Created & Saved! Join Code: ${code}`);

    // Listen for participants joining via Firestore
    attachHostCompetitionListeners(code);
}

function setupTeacherWaitingRoomUI(comp) {
    document.getElementById("tLobbyCode").textContent = comp.code;
    document.getElementById("tLobbySubjectBadge").textContent = `📚 ${comp.subject}`;
    document.getElementById("tLobbyQuestionsBadge").textContent = `📝 ${comp.totalQuestions} Questions`;
    document.getElementById("tLobbyStudentCount").textContent = "0";
    document.getElementById("tLobbyProgressBar").style.width = "0%";

    // Render QR Code
    renderHostQrCode(comp.code);

    // Reset students list
    const list = document.getElementById("tLobbyStudentsList");
    if (list) {
        list.innerHTML = `
            <div class="waiting-placeholder">
                <div class="radar-pulse"></div>
                <p>Waiting for students to enter code & join...</p>
            </div>
        `;
    }
}

function getLiveCompetitionJoinUrl(code) {
    const defaultPagesBase = "https://iniya75.github.io/QuizManagement/";
    let baseUrl = defaultPagesBase;

    try {
        if (typeof window !== "undefined" && window.location) {
            const host = window.location.hostname;
            if (host === "iniya75.github.io") {
                let pathname = window.location.pathname;
                if (!pathname.endsWith("/")) {
                    const lastSlash = pathname.lastIndexOf("/");
                    pathname = lastSlash >= 0 ? pathname.substring(0, lastSlash + 1) : "/";
                }
                baseUrl = `${window.location.origin}${pathname}`;
            } else if (host === "localhost" || host === "127.0.0.1" || window.location.protocol === "file:") {
                // When running locally, use public GitHub Pages URL so scanning on phones works!
                baseUrl = defaultPagesBase;
            } else {
                let pathname = window.location.pathname;
                if (!pathname.endsWith("/")) {
                    const lastSlash = pathname.lastIndexOf("/");
                    pathname = lastSlash >= 0 ? pathname.substring(0, lastSlash + 1) : "/";
                }
                baseUrl = `${window.location.origin}${pathname}`;
            }
        }
    } catch (e) {
        baseUrl = defaultPagesBase;
    }

    if (!baseUrl.endsWith("/")) {
        baseUrl += "/";
    }

    const fullJoinUrl = `${baseUrl}?join=${encodeURIComponent(code)}`;
    console.log("[SKQ Host] Generated public QR join URL:", fullJoinUrl);
    return fullJoinUrl;
}

function renderHostQrCode(code) {
    const qrContainer = document.getElementById("teacherQrCode");
    if (!qrContainer) return;
    qrContainer.innerHTML = "";

    const joinUrl = getLiveCompetitionJoinUrl(code);

    try {
        if (typeof QRCode !== "undefined") {
            new QRCode(qrContainer, {
                text: joinUrl,
                width: 170,
                height: 170,
                colorDark: "#1e1b4b",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.M
            });
        } else {
            // Fallback SVG QR generator or QR Server API
            qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(joinUrl)}" alt="QR Code" style="width:170px;height:170px;border-radius:12px;" />`;
        }
    } catch (qrErr) {
        console.warn("QR generation fallback:", qrErr);
        qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${encodeURIComponent(joinUrl)}" alt="QR Code" style="width:170px;height:170px;border-radius:12px;" />`;
    }
}

function copyCompetitionCode() {
    if (!activeHostCompetition) return;
    navigator.clipboard.writeText(activeHostCompetition.code)
        .then(() => showToast(`📋 Copied code: ${activeHostCompetition.code}`))
        .catch(() => alert(`Competition Code: ${activeHostCompetition.code}`));
}

function copyCompetitionLink() {
    if (!activeHostCompetition) return;
    const joinUrl = getLiveCompetitionJoinUrl(activeHostCompetition.code);
    navigator.clipboard.writeText(joinUrl)
        .then(() => showToast("🔗 Copied direct join link to clipboard!"))
        .catch(() => alert(joinUrl));
}

function cancelCompetition() {
    if (!confirm("Are you sure you want to cancel this live competition?")) return;

    if (activeHostCompetition) {
        broadcastLiveEvent({ type: "COMPETITION_CANCELLED", code: activeHostCompetition.code });
        if (typeof db !== "undefined") {
            db.collection("liveCompetitions").doc(activeHostCompetition.code).update({
                status: "cancelled",
                temporaryQuestions: firebase.firestore.FieldValue.delete(),
                questions: firebase.firestore.FieldValue.delete()
            }).catch(() => {});
        }
        cleanupActiveHostListeners();
        activeHostCompetition = null;
        localStorage.removeItem("skillquest_active_competition");
    }

    showTeacherPage("teacherDashboard");
    showToast("Competition cancelled.");
}

/* =====================================================
   REAL-TIME SYNCHRONIZATION ENGINE (HOST & PARTICIPANT)
===================================================== */

function setupBroadcastChannel(code) {
    if (liveBroadcastChannel) {
        try { liveBroadcastChannel.close(); } catch(e) {}
    }

    try {
        liveBroadcastChannel = new BroadcastChannel(`skillquest_live_${code}`);
        liveBroadcastChannel.onmessage = (e) => {
            handleIncomingLiveEvent(e.data);
        };
    } catch (err) {
        console.warn("BroadcastChannel not supported, using storage fallback:", err);
    }
}

function broadcastLiveEvent(data) {
    if (liveBroadcastChannel) {
        try {
            liveBroadcastChannel.postMessage(data);
        } catch(e) {}
    }
    // Also trigger localStorage event for legacy / cross-window sync
    try {
        localStorage.setItem("skillquest_live_event", JSON.stringify({ ...data, _ts: Date.now() }));
    } catch(e) {}
}

window.addEventListener("storage", (e) => {
    if (e.key === "skillquest_live_event" && e.newValue) {
        try {
            const data = JSON.parse(e.newValue);
            handleIncomingLiveEvent(data);
        } catch(err) {}
    }
});

function handleIncomingLiveEvent(event) {
    if (!event) return;

    // --- HOST HANDLERS ---
    if (activeHostCompetition && event.code === activeHostCompetition.code) {
        if (event.type === "STUDENT_JOINED") {
            handleStudentJoinedHost(event.participant);
        } else if (event.type === "ANSWER_SUBMITTED") {
            handleStudentAnswerSubmittedHost(event);
        }
    }

    // --- STUDENT HANDLERS ---
    if (currentStudentLiveSession && event.code === currentStudentLiveSession.code) {
        if (event.type === "QUIZ_STARTED") {
            handleQuizStartedStudent(event.competition);
        } else if (event.type === "NEXT_QUESTION") {
            handleNextQuestionStudent(event.competition);
        } else if (event.type === "SHOW_RESULT") {
            handleShowResultStudent(event);
        } else if (event.type === "SHOW_LEADERBOARD") {
            handleShowLeaderboardStudent(event);
        } else if (event.type === "COMPETITION_CANCELLED") {
            alert("The host has ended this live competition.");
            exitStudentLiveQuiz();
        }
    }
}

function attachHostCompetitionListeners(code) {
    cleanupActiveHostListeners();

    if (typeof db !== "undefined" && db) {
        // Real-time listener on participants subcollection
        teacherUnsubParticipants = db.collection("liveCompetitions")
            .doc(code)
            .collection("participants")
            .onSnapshot((snapshot) => {
                const participantsMap = {};
                snapshot.forEach(doc => {
                    participantsMap[doc.id] = doc.data();
                });

                if (activeHostCompetition) {
                    activeHostCompetition.participants = participantsMap;
                    activeHostCompetition.participantCount = Object.keys(participantsMap).length;
                    updateHostParticipantsUI();
                }
            }, (err) => {
                console.warn("[SKQ Host] Participants listener error:", err);
            });

        // Real-time listener on answers subcollection for cross-device updates
        teacherUnsubAnswers = db.collection("liveCompetitions")
            .doc(code)
            .collection("answers")
            .onSnapshot((snapshot) => {
                if (!activeHostCompetition) return;
                snapshot.docChanges().forEach(change => {
                    if (change.type === "added") {
                        const ans = change.doc.data();
                        handleStudentAnswerSubmittedHost({
                            studentId: ans.participantId,
                            studentName: ans.studentName,
                            questionIndex: ans.questionIndex,
                            optionIndex: ans.selectedOption,
                            isCorrect: ans.isCorrect,
                            pointsAwarded: ans.pointsEarned
                        });
                    }
                });
            }, (err) => {
                console.warn("[SKQ Host] Answers listener error:", err);
            });
    }
}

function cleanupActiveHostListeners() {
    if (teacherUnsubCompetition) {
        try { teacherUnsubCompetition(); } catch(e) {}
        teacherUnsubCompetition = null;
    }
    if (teacherUnsubParticipants) {
        try { teacherUnsubParticipants(); } catch(e) {}
        teacherUnsubParticipants = null;
    }
    if (teacherUnsubAnswers) {
        try { teacherUnsubAnswers(); } catch(e) {}
        teacherUnsubAnswers = null;
    }
    clearInterval(liveTimerInterval);
}

function handleStudentJoinedHost(participant) {
    if (!activeHostCompetition) return;
    if (!activeHostCompetition.participants) activeHostCompetition.participants = {};

    activeHostCompetition.participants[participant.id] = participant;
    activeHostCompetition.participantCount = Object.keys(activeHostCompetition.participants).length;

    updateHostParticipantsUI();
}

function updateHostParticipantsUI() {
    if (!activeHostCompetition) return;

    const count = activeHostCompetition.participantCount || 0;
    const countElem = document.getElementById("tLobbyStudentCount");
    if (countElem) countElem.textContent = count;

    const progressFill = document.getElementById("tLobbyProgressBar");
    if (progressFill) {
        const pct = Math.min((count / 100) * 100, 100);
        progressFill.style.width = `${pct}%`;
    }

    const list = document.getElementById("tLobbyStudentsList");
    if (!list) return;

    if (count === 0) {
        list.innerHTML = `
            <div class="waiting-placeholder">
                <div class="radar-pulse"></div>
                <p>Waiting for students to enter code & join...</p>
            </div>
        `;
        return;
    }

    list.innerHTML = "";
    Object.values(activeHostCompetition.participants).forEach(p => {
        const chip = document.createElement("div");
        chip.className = "student-chip";
        const initial = (p.studentName || p.name || "S").charAt(0).toUpperCase();
        chip.innerHTML = `
            <span class="chip-avatar">${initial}</span>
            <span>${p.studentName || p.name || "Student"}</span>
        `;
        list.appendChild(chip);
    });
}

/* =====================================================
   HOST LIVE QUIZ FLOW & SYNCHRONIZED TIMER
===================================================== */

async function startLiveQuiz() {
    if (!activeHostCompetition) return;

    activeHostCompetition.status = "active";
    activeHostCompetition.phase = "question";
    activeHostCompetition.currentQuestionIndex = 0;
    activeHostCompetition.questionStartTime = Date.now();
    activeHostCompetition.questionDuration = 60;
    activeHostCompetition.answersSummary = {};

    // Reset participant scores in memory
    Object.keys(activeHostCompetition.participants || {}).forEach(pid => {
        activeHostCompetition.participants[pid].score = 0;
        activeHostCompetition.participants[pid].answers = {};
    });

    console.log("[SKQ Teacher] Starting live quiz. Current question index changed to 0 for room:", activeHostCompetition.code);

    if (typeof db !== "undefined" && db) {
        try {
            await db.collection("liveCompetitions").doc(activeHostCompetition.code).update({
                status: "active",
                phase: "question",
                currentQuestionIndex: 0,
                questionStartTime: Date.now(),
                questionStartedAt: firebase.firestore.FieldValue.serverTimestamp(),
                questionDuration: 60
            });
            console.log("[SKQ Teacher] Firestore updated: phase = question, currentQuestionIndex = 0, status = active");
        } catch (e) {
            console.warn("[SKQ Teacher] Firestore start update error:", e);
        }
    }

    broadcastLiveEvent({
        type: "QUIZ_STARTED",
        code: activeHostCompetition.code,
        competition: activeHostCompetition
    });

    showTeacherPage("teacherLiveQuiz");
    renderHostQuestionView();
    startHostQuestionTimer();
}

function renderHostQuestionView() {
    if (!activeHostCompetition) return;

    const qIdx = activeHostCompetition.currentQuestionIndex || 0;
    const rawQ = activeHostCompetition.questions[qIdx];
    if (!rawQ) return;
    const question = normalizeLiveQuestion(rawQ);

    document.getElementById("tLiveSubjectPill").textContent = `📚 ${activeHostCompetition.subject}`;
    document.getElementById("tLiveQuestionNumber").textContent = `Question ${qIdx + 1} of ${activeHostCompetition.totalQuestions}`;
    document.getElementById("tLiveQuestionText").textContent = question.question;

    document.getElementById("tOptTextA").textContent = question.options[0] || "";
    document.getElementById("tOptTextB").textContent = question.options[1] || "";
    document.getElementById("tOptTextC").textContent = question.options[2] || "";
    document.getElementById("tOptTextD").textContent = question.options[3] || "";

    const totalStudents = activeHostCompetition.participantCount || Object.keys(activeHostCompetition.participants || {}).length;
    document.getElementById("tTotalParticipantsCount").textContent = totalStudents;
    document.getElementById("tAnswersSubmittedCount").textContent = "0";
    document.getElementById("tAnswerPercentage").textContent = "0%";
    document.getElementById("tSubmissionProgressBar").style.width = "0%";
}

function startHostQuestionTimer() {
    clearInterval(liveTimerInterval);
    liveTimeRemaining = 60;

    const timerElem = document.getElementById("tLiveTimer");
    const ringElem = document.querySelector(".timer-circle-ring");

    if (timerElem) timerElem.textContent = liveTimeRemaining;
    if (ringElem) ringElem.className = "timer-circle-ring";

    liveTimerInterval = setInterval(() => {
        liveTimeRemaining--;

        if (timerElem) timerElem.textContent = liveTimeRemaining;

        if (ringElem) {
            if (liveTimeRemaining <= 10) {
                ringElem.className = "timer-circle-ring danger";
            } else if (liveTimeRemaining <= 25) {
                ringElem.className = "timer-circle-ring warning";
            }
        }

        if (liveTimeRemaining <= 0) {
            clearInterval(liveTimerInterval);
            onQuestionTimerEndHost();
        }
    }, 1000);
}

function forceEndQuestionTimer() {
    clearInterval(liveTimerInterval);
    liveTimeRemaining = 0;
    onQuestionTimerEndHost();
}

function handleStudentAnswerSubmittedHost(event) {
    if (!activeHostCompetition) return;

    const qIdx = activeHostCompetition.currentQuestionIndex || 0;
    if (!activeHostCompetition.answersSummary[qIdx]) {
        activeHostCompetition.answersSummary[qIdx] = { 0: 0, 1: 0, 2: 0, 3: 0, total: 0, submissions: {} };
    }

    const summary = activeHostCompetition.answersSummary[qIdx];
    if (!summary.submissions[event.studentId]) {
        summary.submissions[event.studentId] = event;
        summary[event.optionIndex] = (summary[event.optionIndex] || 0) + 1;
        summary.total++;

        // Update participant score in host memory
        if (activeHostCompetition.participants && activeHostCompetition.participants[event.studentId]) {
            const p = activeHostCompetition.participants[event.studentId];
            if (!p.answers) p.answers = {};
            p.answers[qIdx] = event;
            p.score = (p.score || 0) + (event.pointsAwarded || 0);
        }

        // Update host progress bar
        const total = activeHostCompetition.participantCount || 1;
        const submitted = summary.total;
        const pct = Math.min(Math.round((submitted / total) * 100), 100);

        const countElem = document.getElementById("tAnswersSubmittedCount");
        if (countElem) countElem.textContent = submitted;

        const pctElem = document.getElementById("tAnswerPercentage");
        if (pctElem) pctElem.textContent = `${pct}%`;

        const barElem = document.getElementById("tSubmissionProgressBar");
        if (barElem) barElem.style.width = `${pct}%`;

        // If all joined participants have answered, finish question early!
        if (submitted >= total && total > 0) {
            setTimeout(() => {
                if (activeHostCompetition && (activeHostCompetition.phase === "question" || activeHostCompetition.status === "in_progress")) {
                    forceEndQuestionTimer();
                }
            }, 800);
        }
    }
}

/* =====================================================
   QUESTION RESULT SCREEN & BAR GRAPH
===================================================== */

function onQuestionTimerEndHost() {
    if (!activeHostCompetition) return;

    activeHostCompetition.status = "active";
    activeHostCompetition.phase = "feedback";
    const qIdx = activeHostCompetition.currentQuestionIndex || 0;
    const rawQ = activeHostCompetition.questions[qIdx];
    const question = normalizeLiveQuestion(rawQ);

    const summary = activeHostCompetition.answersSummary[qIdx] || { 0: 0, 1: 0, 2: 0, 3: 0, total: 0 };
    const totalParticipants = activeHostCompetition.participantCount || Object.keys(activeHostCompetition.participants || {}).length;
    const totalAnswered = summary.total || 0;
    const unanswered = Math.max(0, totalParticipants - totalAnswered);

    console.log("[SKQ Teacher] Question ended. Phase changed to feedback for Question", qIdx + 1);

    // Write phase: "feedback" to Firestore so cross-device students are notified
    if (typeof db !== "undefined" && db) {
        const firestoreSummary = { 0: summary[0] || 0, 1: summary[1] || 0, 2: summary[2] || 0, 3: summary[3] || 0, total: summary.total || 0 };
        const answersSummaryUpdate = {};
        answersSummaryUpdate[`answersSummary.${qIdx}`] = firestoreSummary;
        db.collection("liveCompetitions").doc(activeHostCompetition.code).update({
            status: "active",
            phase: "feedback",
            questionEndedAt: firebase.firestore.FieldValue.serverTimestamp(),
            ...answersSummaryUpdate
        }).catch(e => console.warn("[SKQ Host] Firestore feedback phase update notice:", e));
    }

    // Render Host Result Screen with Bar Graph
    renderHostResultScreen(question, summary, totalParticipants, totalAnswered, unanswered);

    // Broadcast result event to same-device students
    broadcastLiveEvent({
        type: "SHOW_RESULT",
        code: activeHostCompetition.code,
        questionIndex: qIdx,
        question: question,
        answersSummary: summary,
        correctAnswer: question.answer,
        totalParticipants: totalParticipants,
        totalAnswered: totalAnswered
    });

    showTeacherPage("teacherResult");
}

function renderHostResultScreen(question, summary, totalParticipants, totalAnswered, unanswered) {
    document.getElementById("tResultQuestionTitle").textContent = question.question;

    const countA = summary[0] || 0;
    const countB = summary[1] || 0;
    const countC = summary[2] || 0;
    const countD = summary[3] || 0;

    const baseTotal = totalAnswered > 0 ? totalAnswered : 1;
    const pctA = Math.round((countA / baseTotal) * 100);
    const pctB = Math.round((countB / baseTotal) * 100);
    const pctC = Math.round((countC / baseTotal) * 100);
    const pctD = Math.round((countD / baseTotal) * 100);

    // Option text previews
    document.getElementById("previewA").textContent = question.options[0] || "A";
    document.getElementById("previewB").textContent = question.options[1] || "B";
    document.getElementById("previewC").textContent = question.options[2] || "C";
    document.getElementById("previewD").textContent = question.options[3] || "D";

    // Set values
    document.getElementById("valBarA").textContent = `${countA} (${pctA}%)`;
    document.getElementById("valBarB").textContent = `${countB} (${pctB}%)`;
    document.getElementById("valBarC").textContent = `${countC} (${pctC}%)`;
    document.getElementById("valBarD").textContent = `${countD} (${pctD}%)`;

    // Reset column highlight
    ["A", "B", "C", "D"].forEach(letter => {
        const col = document.getElementById(`colBar${letter}`);
        if (col) col.classList.remove("is-correct-column");
    });

    const correctLetter = String.fromCharCode(65 + question.answer);
    const correctCol = document.getElementById(`colBar${correctLetter}`);
    if (correctCol) correctCol.classList.add("is-correct-column");

    // Animate bar pillars
    setTimeout(() => {
        document.getElementById("pillarA").style.height = `${pctA}%`;
        document.getElementById("pillarB").style.height = `${pctB}%`;
        document.getElementById("pillarC").style.height = `${pctC}%`;
        document.getElementById("pillarD").style.height = `${pctD}%`;
    }, 100);

    // Correct Answer Text
    const correctText = question.options[question.answer];
    document.getElementById("tCorrectAnswerText").textContent = `Option ${correctLetter} — "${correctText}" — CORRECT ANSWER ✓`;

    // Metrics
    document.getElementById("tTotalAnsweredCount").textContent = totalAnswered;
    document.getElementById("tTotalUnansweredCount").textContent = unanswered;

    const correctCount = summary[question.answer] || 0;
    const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;
    document.getElementById("tAccuracyRate").textContent = `${accuracy}%`;
}

/* =====================================================
   LIVE LEADERBOARD (HOST & STUDENT)
===================================================== */

function calculateSortedLeaderboard(participantsMap) {
    const list = Object.values(participantsMap || {});
    list.sort((a, b) => {
        if ((b.score || 0) !== (a.score || 0)) {
            return (b.score || 0) - (a.score || 0);
        }
        if ((b.correctAnswers || 0) !== (a.correctAnswers || 0)) {
            return (b.correctAnswers || 0) - (a.correctAnswers || 0);
        }
        return (a.joinedAt || 0) - (b.joinedAt || 0);
    });
    return list;
}

function showLiveLeaderboard() {
    if (!activeHostCompetition) return;

    activeHostCompetition.status = "active";
    activeHostCompetition.phase = "leaderboard";
    const qIdx = activeHostCompetition.currentQuestionIndex || 0;
    const isLastQuestion = qIdx >= activeHostCompetition.totalQuestions - 1;

    const leaderboard = calculateSortedLeaderboard(activeHostCompetition.participants);

    // Update Host Next button text
    const nextBtn = document.getElementById("tNextQuestionBtn");
    if (nextBtn) {
        nextBtn.textContent = isLastQuestion ? "🏆 Finish Quiz & View Final Champions Podium" : `Next Question (Q${qIdx + 2}) ➡️`;
    }

    document.getElementById("tLeaderboardSubtitle").textContent = `Rankings after Question ${qIdx + 1} of ${activeHostCompetition.totalQuestions}`;

    renderLeaderboardTable("tLeaderboardTableContainer", leaderboard, null);

    // Write phase: "leaderboard" to Firestore for cross-device students
    if (typeof db !== "undefined" && db) {
        db.collection("liveCompetitions").doc(activeHostCompetition.code).update({
            status: "active",
            phase: "leaderboard"
        }).catch(e => console.warn("[SKQ Host] Firestore leaderboard update notice:", e));
    }

    // Broadcast leaderboard to same-device students
    broadcastLiveEvent({
        type: "SHOW_LEADERBOARD",
        code: activeHostCompetition.code,
        leaderboard: leaderboard,
        questionIndex: qIdx,
        isLastQuestion: isLastQuestion
    });

    showTeacherPage("teacherLeaderboard");
}

function renderLeaderboardTable(containerId, leaderboard, highlightPlayerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!leaderboard || leaderboard.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding: 20px; color: var(--muted);">No player data recorded yet.</p>`;
        return;
    }

    let html = `
        <table class="live-rank-table">
            <thead>
                <tr>
                    <th style="width: 70px;">Rank</th>
                    <th>Student Name</th>
                    <th style="text-align: right;">Total Points</th>
                </tr>
            </thead>
            <tbody>
    `;

    leaderboard.forEach((p, idx) => {
        const rank = idx + 1;
        const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
        const rankDisplay = medals[rank] ? `${medals[rank]} ${rank}` : `#${rank}`;
        const isSelf = highlightPlayerId && highlightPlayerId === (p.id || p.participantId);
        const displayName = p.studentName || p.name || "Student";
        const initial = displayName.charAt(0).toUpperCase();

        html += `
            <tr class="live-rank-row ${isSelf ? 'current-player-row' : ''}">
                <td class="rank-badge-cell">${rankDisplay}</td>
                <td>
                    <div class="player-info-cell">
                        <span class="player-avatar">${initial}</span>
                        <strong>${displayName}</strong>
                        ${isSelf ? '<span class="score-delta-pill">YOU</span>' : ''}
                    </div>
                </td>
                <td class="player-score-cell">${(p.score || 0).toLocaleString()} pts</td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

function renderDetailedLeaderboardTable(containerId, leaderboard, highlightPlayerId, totalQuestions) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (!leaderboard || leaderboard.length === 0) {
        container.innerHTML = `<p style="text-align:center; padding: 20px; color: var(--muted);">No player data recorded yet.</p>`;
        return;
    }

    let html = `
        <table class="live-rank-table detailed-rank-table">
            <thead>
                <tr>
                    <th style="width: 60px;">Rank</th>
                    <th>Student Name</th>
                    <th style="text-align: right;">Score</th>
                    <th style="text-align: center;">Correct</th>
                    <th style="text-align: center;">Wrong</th>
                    <th style="text-align: center;">Accuracy</th>
                </tr>
            </thead>
            <tbody>
    `;

    leaderboard.forEach((p, idx) => {
        const rank = idx + 1;
        const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
        const rankDisplay = medals[rank] ? `${medals[rank]} ${rank}` : `#${rank}`;
        const isSelf = highlightPlayerId && highlightPlayerId === (p.id || p.participantId);
        const displayName = p.studentName || p.name || "Student";
        const initial = displayName.charAt(0).toUpperCase();
        const correct = p.correctAnswers || 0;
        const wrong = p.wrongAnswers || 0;
        const total = totalQuestions || (correct + wrong) || 1;
        const pct = Math.round((correct / total) * 100);

        html += `
            <tr class="live-rank-row ${isSelf ? 'current-player-row' : ''}">
                <td class="rank-badge-cell">${rankDisplay}</td>
                <td>
                    <div class="player-info-cell">
                        <span class="player-avatar">${initial}</span>
                        <strong>${displayName}</strong>
                        ${isSelf ? '<span class="score-delta-pill">YOU</span>' : ''}
                    </div>
                </td>
                <td class="player-score-cell" style="text-align: right; font-weight: 800;">${(p.score || 0).toLocaleString()} pts</td>
                <td style="text-align: center; color: #10b981; font-weight: 700;">${correct}</td>
                <td style="text-align: center; color: #ef4444; font-weight: 700;">${wrong}</td>
                <td style="text-align: center; font-weight: 700;">${pct}%</td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    container.innerHTML = html;
}

async function proceedToNextQuestion() {
    if (!activeHostCompetition) return;

    const qIdx = activeHostCompetition.currentQuestionIndex || 0;
    if (qIdx >= activeHostCompetition.totalQuestions - 1) {
        // Show Final Podium!
        showFinalPodiumHost();
        return;
    }

    const nextIndex = qIdx + 1;
    activeHostCompetition.currentQuestionIndex = nextIndex;
    activeHostCompetition.status = "active";
    activeHostCompetition.phase = "question";
    activeHostCompetition.questionStartTime = Date.now();
    activeHostCompetition.questionDuration = 60;

    console.log("[SKQ Teacher] Teacher moved to next question. Index:", nextIndex + 1);
    console.log("[SKQ Teacher] Current question index changed in Firestore to:", nextIndex);

    // Write to Firestore so cross-device students receive the next question
    if (typeof db !== "undefined" && db) {
        try {
            await db.collection("liveCompetitions").doc(activeHostCompetition.code).update({
                status: "active",
                phase: "question",
                currentQuestionIndex: nextIndex,
                questionStartTime: activeHostCompetition.questionStartTime,
                questionStartedAt: firebase.firestore.FieldValue.serverTimestamp(),
                questionDuration: 60
            });
        } catch(e) {
            console.warn("[SKQ Host] Firestore next question update notice:", e);
        }
    }

    // Broadcast to same-device students
    broadcastLiveEvent({
        type: "NEXT_QUESTION",
        code: activeHostCompetition.code,
        competition: activeHostCompetition
    });

    showTeacherPage("teacherLiveQuiz");
    renderHostQuestionView();
    startHostQuestionTimer();
}

/* =====================================================
   FINAL PODIUM & WINNERS CELEBRATION
===================================================== */

async function showFinalPodiumHost() {
    if (!activeHostCompetition) return;

    activeHostCompetition.status = "completed";
    activeHostCompetition.phase = "finished";
    const leaderboard = calculateSortedLeaderboard(activeHostCompetition.participants);

    const winner1 = leaderboard[0] || { name: "Champion", score: 0 };
    const winner2 = leaderboard[1] || { name: "Runner Up", score: 0 };
    const winner3 = leaderboard[2] || { name: "3rd Place", score: 0 };

    document.getElementById("podium1Name").textContent = winner1.studentName || winner1.name || "Champion";
    document.getElementById("podium1Score").textContent = `${(winner1.score || 0).toLocaleString()} pts`;

    document.getElementById("podium2Name").textContent = winner2.studentName || winner2.name || "Runner Up";
    document.getElementById("podium2Score").textContent = `${(winner2.score || 0).toLocaleString()} pts`;

    document.getElementById("podium3Name").textContent = winner3.studentName || winner3.name || "3rd Place";
    document.getElementById("podium3Score").textContent = `${(winner3.score || 0).toLocaleString()} pts`;

    renderDetailedLeaderboardTable("tFinalLeaderboardTableContainer", leaderboard, null, activeHostCompetition.totalQuestions);

    createConfetti();

    console.log("[SKQ Teacher] Quiz finished. Setting phase = finished, status = completed.");

    // Write 'completed' and 'finished' status to Firestore so cross-device students see final podium
    if (typeof db !== "undefined" && db) {
        try {
            await db.collection("liveCompetitions").doc(activeHostCompetition.code).update({
                status: "completed",
                phase: "finished",
                completedAt: firebase.firestore.FieldValue.serverTimestamp()
            });
            console.log("[SKQ Teacher] Firestore room marked completed and phase = finished");
        } catch(e) {
            console.warn("[SKQ Host] Firestore completed update notice:", e);
        }
    }

    // Broadcast final podium to same-device students
    broadcastLiveEvent({
        type: "SHOW_PODIUM",
        code: activeHostCompetition.code,
        leaderboard: leaderboard,
        winner1: winner1,
        winner2: winner2,
        winner3: winner3
    });

    showTeacherPage("teacherPodium");
}

async function saveAndFinishCompetition() {
    if (!activeHostCompetition) {
        showTeacherPage("teacherDashboard");
        return;
    }

    showLoading("Archiving Competition Results...");

    const leaderboard = calculateSortedLeaderboard(activeHostCompetition.participants);
    const winner = leaderboard[0] ? (leaderboard[0].studentName || leaderboard[0].name) : "No Winner";

    const totalScores = leaderboard.reduce((sum, p) => sum + (p.score || 0), 0);
    const avgScore = leaderboard.length > 0 ? Math.round(totalScores / leaderboard.length) : 0;

    const historyRecord = {
        code: activeHostCompetition.code,
        subject: activeHostCompetition.subject,
        teacherId: currentTeacher ? (currentTeacher.teacherId || currentTeacher.uid || "TEACHER-01") : "TEACHER-01",
        teacherName: currentTeacher ? currentTeacher.name : "Professor",
        date: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
        totalQuestions: activeHostCompetition.totalQuestions,
        participantCount: leaderboard.length,
        winner: winner,
        averageScore: avgScore,
        leaderboard: leaderboard
    };

    // Save locally
    saveStoredCompetitionHistory(historyRecord);

    // Save to Firestore
    if (typeof db !== "undefined" && db) {
        try {
            await db.collection("competitionHistory").add({
                ...historyRecord,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });
            await db.collection("liveCompetitions").doc(activeHostCompetition.code).update({
                status: "completed",
                phase: "finished"
            });
        } catch (dbErr) {
            console.warn("Firestore history save notice:", dbErr);
        }
    }

    cleanupActiveHostListeners();
    activeHostCompetition = null;
    localStorage.removeItem("skillquest_active_competition");

    hideLoading();
    showTeacherPage("teacherDashboard");
    showToast("🏆 Competition archived successfully!");
}

/* =====================================================
   COMPETITION HISTORY (TEACHER PORTAL)
===================================================== */

function getStoredCompetitionHistory() {
    try {
        const data = localStorage.getItem("skillquest_competition_history");
        return data ? JSON.parse(data) : [];
    } catch(e) {
        return [];
    }
}

function saveStoredCompetitionHistory(record) {
    const list = getStoredCompetitionHistory();
    list.unshift(record);
    localStorage.setItem("skillquest_competition_history", JSON.stringify(list));
}

async function loadTeacherCompetitionHistory() {
    const container = document.getElementById("teacherHistoryList");
    if (!container) return;

    container.innerHTML = `<p style="text-align:center; padding: 30px; color: var(--muted);">Loading history records... ⏳</p>`;

    let records = getStoredCompetitionHistory();

    // Fetch from Firestore if available
    if (typeof db !== "undefined") {
        try {
            const snapshot = await db.collection("competitionHistory")
                .orderBy("timestamp", "desc")
                .limit(20)
                .get();

            if (!snapshot.empty) {
                const cloudRecords = [];
                snapshot.forEach(doc => {
                    cloudRecords.push({ id: doc.id, ...doc.data() });
                });
                if (cloudRecords.length > 0) records = cloudRecords;
            }
        } catch(e) {
            console.warn("Firestore fetch history fallback:", e);
        }
    }

    if (records.length === 0) {
        container.innerHTML = `
            <div class="empty-history" style="grid-column: 1 / -1; text-align: center; padding: 40px;">
                No competitions completed yet. Host your first live competition! 🚀
            </div>
        `;
        return;
    }

    container.innerHTML = "";
    records.forEach((comp, idx) => {
        const card = document.createElement("div");
        card.className = "comp-history-card";
        card.innerHTML = `
            <div>
                <div class="comp-card-header">
                    <span class="comp-card-code">${comp.code}</span>
                    <span class="comp-card-badge">${comp.subject}</span>
                </div>
                <div class="comp-card-date">📅 ${comp.date || "Recent"}</div>

                <div class="comp-stats-grid">
                    <div class="comp-stats-item">
                        <span>Questions</span>
                        <strong>${comp.totalQuestions || 5} MCQs</strong>
                    </div>
                    <div class="comp-stats-item">
                        <span>Participants</span>
                        <strong>👥 ${comp.participantCount || 0} Students</strong>
                    </div>
                </div>

                <div class="comp-winner-row">
                    <span>👑 Winner:</span>
                    <strong>${comp.winner || "Student"}</strong>
                </div>
            </div>

            <button class="secondary-btn view-details-btn" onclick="openCompetitionDetailModal(${idx})">
                🔍 View Leaderboard Standings
            </button>
        `;
        container.appendChild(card);
    });

    // Store reference for modal viewing
    window.lastLoadedTeacherHistory = records;
}

function openCompetitionDetailModal(index) {
    const records = window.lastLoadedTeacherHistory || getStoredCompetitionHistory();
    const comp = records[index];
    if (!comp) return;

    document.getElementById("modalCompTitle").textContent = `${comp.subject} Competition`;
    document.getElementById("modalCompMeta").textContent = `Code: ${comp.code} | Date: ${comp.date || "Recent"}`;
    document.getElementById("modalCompSubject").textContent = comp.subject;
    document.getElementById("modalCompQuestions").textContent = comp.totalQuestions || 5;
    document.getElementById("modalCompParticipants").textContent = `${comp.participantCount || 0} Students`;
    document.getElementById("modalCompWinner").textContent = comp.winner || "-";

    renderLeaderboardTable("modalLeaderboardContent", comp.leaderboard || [], null);

    document.getElementById("competitionDetailModal").classList.remove("hidden");
}

function closeCompetitionDetailModal() {
    const modal = document.getElementById("competitionDetailModal");
    if (modal) modal.classList.add("hidden");
}

/* ==========================================================================
   STUDENT LIVE COMPETITION CLIENT
   ========================================================================== */

function openStudentJoinPage() {
    hideAllPortals();
    const app = document.getElementById("studentLiveApp");
    if (app) app.classList.remove("hidden");

    showStudentLiveScreen("studentJoinPage");

    // Auto-fill student name if logged in
    const nameInput = document.getElementById("sJoinNameInput");
    if (nameInput) {
        if (!nameInput.value) {
            if (userData && userData.name) {
                nameInput.value = userData.name;
            } else if (currentUser && currentUser.displayName) {
                nameInput.value = currentUser.displayName;
            }
        }
        if (nameInput.value) {
            updateStudentLivePlayerName(nameInput.value);
        }
    }

    // Check if URL has ?join=CODE
    const urlParams = new URLSearchParams(window.location.search);
    const joinCode = urlParams.get("join");
    if (joinCode) {
        const cleanCode = joinCode.trim().toUpperCase();
        console.log("[SKQ Student] Student join code detected from URL:", cleanCode);
        const codeInput = document.getElementById("sJoinCodeInput");
        if (codeInput) {
            codeInput.value = cleanCode;
        }

        // Prefetch and display room title & subject
        if (typeof db !== "undefined" && db) {
            db.collection("liveCompetitions").doc(cleanCode).get().then(snap => {
                if (snap.exists) {
                    const data = snap.data();
                    const preview = document.getElementById("sJoinRoomPreview");
                    if (preview) {
                        preview.innerHTML = `<h4>📚 ${data.title || data.subject || "Live Competition"}</h4><p>Room: <strong>${data.code || data.competitionCode || cleanCode}</strong> • ${data.totalQuestions || (data.questions ? data.questions.length : 5)} Questions</p>`;
                        preview.classList.remove("hidden");
                    }
                }
            }).catch(() => {});
        }
    }
}

function updateStudentLivePlayerName(name) {
    const badge = document.getElementById("sLivePlayerNameBadge");
    if (badge) {
        const cleanName = (name || "").trim();
        badge.textContent = cleanName ? `Hi, ${cleanName}` : "Student";
    }
}

function showStudentLiveScreen(screenId) {
    document.querySelectorAll(".student-live-page, .student-join-screen").forEach(s => {
        s.classList.add("hidden");
        s.classList.remove("active");
    });

    const target = document.getElementById(screenId);
    if (target) {
        target.classList.remove("hidden");
        target.classList.add("active");
    }

    window.scrollTo(0, 0);
}

function renderStudentWaitingRoom(comp, studentName) {
    const title = comp.title || comp.subject || "Live Quiz";
    const subTitleElem = document.getElementById("sWaitingSubjectTitle");
    if (subTitleElem) subTitleElem.textContent = title;

    const playerElem = document.getElementById("sWaitingPlayerName");
    if (playerElem) playerElem.textContent = studentName || "Student";

    const countElem = document.getElementById("sWaitingStudentCount");
    if (countElem) countElem.textContent = `${comp.participantCount || 1}`;

    const headingElem = document.getElementById("sWaitingStatusHeading");
    if (headingElem) headingElem.textContent = "Waiting for the host to start the quiz...";

    showStudentLiveScreen("studentWaitingRoom");
}

function exitStudentLiveQuiz() {
    if (currentStudentLiveSession) {
        if (studentUnsubCompetition) {
            try { studentUnsubCompetition(); } catch(e) {}
            studentUnsubCompetition = null;
        }
        clearInterval(liveTimerInterval);
        currentStudentLiveSession = null;
    }

    hideAllPortals();
    openStudentPortal();
}

async function joinLiveCompetition() {
    const urlParams = new URLSearchParams(window.location.search);
    const codeFromUrl = urlParams.get("join") || "";
    const rawCode = document.getElementById("sJoinCodeInput").value;
    const normalizedCode = String(rawCode || "").trim().toUpperCase();
    const nameInput = document.getElementById("sJoinNameInput").value.trim();
    const errElem = document.getElementById("sJoinError");
    errElem.textContent = "";

    console.log("[SKQ Student] Code received from URL:", codeFromUrl);
    console.log("[SKQ Student] Code entered by student:", rawCode);
    console.log("[SKQ Student] Normalized code:", normalizedCode);

    if (!normalizedCode) {
        errElem.textContent = "Please enter the Competition Code.";
        return;
    }
    if (!nameInput) {
        errElem.textContent = "Please enter your Name.";
        return;
    }

    showLoading("Connecting to Live Lobby...");

    try {
        let competitionData = null;
        let competitionDocId = normalizedCode;
        let lastError = null;

        // Build list of candidate codes to check (exact normalized, and with SKQ- prefix if user typed just 6 digits)
        const codesToCheck = [normalizedCode];
        if (!normalizedCode.startsWith("SKQ-") && /^\d+$/.test(normalizedCode)) {
            codesToCheck.push(`SKQ-${normalizedCode}`);
        }

        // 1. Check local active competition first (same-tab / demo mode)
        for (const candidate of codesToCheck) {
            if (activeHostCompetition && (activeHostCompetition.code === candidate || activeHostCompetition.competitionCode === candidate)) {
                console.log("[SKQ Student] Found competition in local memory (same-tab mode):", candidate);
                competitionData = { ...activeHostCompetition };
                competitionDocId = candidate;
                break;
            }
        }

        // 2. Query Firestore liveCompetitions
        if (!competitionData && typeof db !== "undefined") {
            for (const candidate of codesToCheck) {
                // A. Query by competitionCode field
                try {
                    console.log("[SKQ Student] Collection being queried: liveCompetitions | Field being queried: competitionCode ==", candidate);
                    const qCompCode = await db.collection("liveCompetitions")
                        .where("competitionCode", "==", candidate)
                        .limit(1)
                        .get();
                    console.log("[SKQ Student] Number of documents returned (field: competitionCode):", qCompCode.size);
                    if (!qCompCode.empty) {
                        const docSnap = qCompCode.docs[0];
                        competitionData = docSnap.data();
                        competitionDocId = docSnap.id;
                        console.log("[SKQ Student] Competition found by competitionCode field. Doc ID:", competitionDocId);
                        break;
                    }
                } catch (err) {
                    lastError = err;
                    console.warn("[SKQ Student] Query by competitionCode warning/error:", err.message);
                }

                // B. Query by code field
                if (!competitionData) {
                    try {
                        console.log("[SKQ Student] Collection being queried: liveCompetitions | Field being queried: code ==", candidate);
                        const qCode = await db.collection("liveCompetitions")
                            .where("code", "==", candidate)
                            .limit(1)
                            .get();
                        console.log("[SKQ Student] Number of documents returned (field: code):", qCode.size);
                        if (!qCode.empty) {
                            const docSnap = qCode.docs[0];
                            competitionData = docSnap.data();
                            competitionDocId = docSnap.id;
                            console.log("[SKQ Student] Competition found by code field. Doc ID:", competitionDocId);
                            break;
                        }
                    } catch (err) {
                        lastError = err;
                        console.warn("[SKQ Student] Query by code warning/error:", err.message);
                    }
                }

                // C. Query by document ID
                if (!competitionData) {
                    try {
                        console.log("[SKQ Student] Collection being queried: liveCompetitions | Doc ID being queried:", candidate);
                        const docDirect = await db.collection("liveCompetitions").doc(candidate).get();
                        console.log("[SKQ Student] Number of documents returned (by Doc ID):", docDirect.exists ? 1 : 0);
                        if (docDirect.exists) {
                            competitionData = docDirect.data();
                            competitionDocId = docDirect.id;
                            console.log("[SKQ Student] Competition found by Doc ID:", competitionDocId);
                            break;
                        }
                    } catch (err) {
                        lastError = err;
                        console.warn("[SKQ Student] Direct doc lookup warning/error:", err.message);
                    }
                }
            }
        }

        if (lastError && !competitionData) {
            console.error("[SKQ Student] Firebase error message:", lastError.message);
        } else {
            console.log("[SKQ Student] Firebase error message: None");
        }

        if (!competitionData) {
            hideLoading();
            console.warn("[SKQ Student] Competition NOT found for code:", normalizedCode);
            errElem.textContent = `Competition room "${normalizedCode}" not found. Please verify the code.`;
            return;
        }

        console.log("[SKQ Student] Competition found:", competitionDocId, "| Subject:", competitionData.subject, "| Status:", competitionData.status);
        console.log("[SKQ Student] Firestore room loaded:", competitionDocId);
        console.log("[SKQ Student] Number of questions loaded:", competitionData.questions ? competitionData.questions.length : 0);

        if (competitionData.status === "completed" || competitionData.status === "cancelled") {
            hideLoading();
            errElem.textContent = `This competition has already ended.`;
            return;
        }

        if (competitionData.expiresAt && new Date(competitionData.expiresAt) < new Date()) {
            hideLoading();
            errElem.textContent = `This competition room has expired.`;
            return;
        }

        // Ensure questions array is populated and normalized
        const rawQuestions = competitionData.questions || competitionData.temporaryQuestions || [];
        competitionData.questions = rawQuestions.map(normalizeLiveQuestion).filter(Boolean);
        competitionData.totalQuestions = competitionData.questions.length;

        // Generate unique student participant ID
        const studentId = currentUser ? currentUser.uid : `s_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
        const participantObj = {
            participantId: studentId,
            id: studentId,
            studentName: nameInput,
            name: nameInput,
            score: 0,
            correctAnswers: 0,
            wrongAnswers: 0,
            answeredCount: 0,
            currentQuestionIndex: 0,
            connected: true,
            joinedAt: Date.now(),
            lastUpdated: Date.now()
        };

        currentStudentLiveSession = {
            code: competitionDocId,   // Use actual Firestore doc ID
            codeDisplay: normalizedCode,   // Code typed or scanned
            studentId: studentId,
            studentName: nameInput,
            score: 0,
            correctCount: 0,
            wrongCount: 0,
            answeredCount: 0,
            currentQuestionIndex: -1,
            hasAnsweredCurrentQuestion: false,
            hasStartedQuiz: false,
            lastAnswer: null,
            competition: competitionData,
            status: "waiting"
        };

        // Update UI name tag
        document.getElementById("sLivePlayerNameBadge").textContent = nameInput;

        // Register participant in Firestore
        if (typeof db !== "undefined" && db) {
            try {
                console.log("[SKQ Student] Registering participant:", studentId, "in liveCompetitions/", competitionDocId, "/participants");
                await db.collection("liveCompetitions")
                    .doc(competitionDocId)
                    .collection("participants")
                    .doc(studentId)
                    .set(participantObj);
                console.log("[SKQ Student] Participant record created successfully.");

                // Increment room participantCount in Firestore
                db.collection("liveCompetitions").doc(competitionDocId).update({
                    participantCount: firebase.firestore.FieldValue.increment(1)
                }).catch(() => {});
            } catch(e) {
                console.error("[SKQ Student] Firestore participant register notice:", e);
            }
        }

        // Safe console logs required by user
        console.log("[SKQ Student] Student joined competition code:", competitionDocId);
        console.log("[SKQ Student] Room document loaded:", competitionDocId);
        console.log("[SKQ Student] Number of questions loaded:", competitionData.questions.length);

        // Connect BroadcastChannel for same-device multi-tab sync
        setupBroadcastChannel(competitionDocId);
        broadcastLiveEvent({
            type: "STUDENT_JOINED",
            code: competitionDocId,
            participant: participantObj
        });

        hideLoading();

        // Setup student waiting room
        document.getElementById("sWaitingSubjectTitle").textContent = `${competitionData.title || competitionData.subject || "Live Quiz"}`;
        document.getElementById("sWaitingPlayerName").textContent = nameInput;
        document.getElementById("sWaitingStudentCount").textContent = `${competitionData.participantCount || 1}`;

        showStudentLiveScreen("studentWaitingRoom");
        showToast("Connected to waiting room! ⚡");

        // Listen for host commands via Firestore real-time
        attachStudentLiveListeners(competitionDocId);

    } catch (err) {
        hideLoading();
        console.error("[SKQ Student] Join error:", err);
        errElem.textContent = "Error joining: " + err.message;
    }
}


function attachStudentLiveListeners(code) {
    // Clean up any existing listener
    if (studentUnsubCompetition) {
        try { studentUnsubCompetition(); } catch(e) {}
        studentUnsubCompetition = null;
    }

    if (typeof db !== "undefined" && db) {
        console.log("[SKQ Student] Attaching Firestore real-time listener on liveCompetitions/", code);
        studentUnsubCompetition = db.collection("liveCompetitions").doc(code).onSnapshot(doc => {
            if (!doc.exists || !currentStudentLiveSession) return;

            const comp = doc.data();

            // Populate & normalize questions
            const rawQuestions = comp.questions || comp.temporaryQuestions || [];
            if (rawQuestions.length > 0) {
                currentStudentLiveSession.competition.questions = rawQuestions.map(normalizeLiveQuestion).filter(Boolean);
                currentStudentLiveSession.competition.totalQuestions = currentStudentLiveSession.competition.questions.length;
            }

            const phase = comp.phase || (comp.status === "in_progress" ? "question" : (comp.status === "question_result" ? "feedback" : (comp.status === "completed" ? "finished" : (comp.status || "waiting"))));
            const qIdx = (typeof comp.currentQuestionIndex === "number") ? comp.currentQuestionIndex : 0;

            console.log("[SKQ Student] Room state update:", {
                phase: phase,
                currentQuestionIndex: qIdx,
                status: comp.status,
                questionsCount: (currentStudentLiveSession.competition.questions || []).length
            });

            if (phase === "waiting") {
                showStudentLiveScreen("studentWaitingRoom");
                const waitHeading = document.getElementById("sWaitingStatusHeading");
                if (waitHeading) waitHeading.textContent = "Waiting for the host to start the quiz...";
                const waitSub = document.getElementById("sWaitingSubjectTitle");
                if (waitSub) waitSub.textContent = `${comp.title || comp.subject || "Live Quiz"}`;
                const waitCnt = document.getElementById("sWaitingStudentCount");
                if (waitCnt && comp.participantCount) waitCnt.textContent = comp.participantCount;
            } else if (phase === "question") {
                // Active question state
                if (currentStudentLiveSession.currentQuestionIndex !== qIdx || !currentStudentLiveSession.hasStartedQuiz) {
                    console.log("[SKQ Student] Current question index changed to:", qIdx);
                    currentStudentLiveSession.hasStartedQuiz = true;
                    currentStudentLiveSession.currentQuestionIndex = qIdx;
                    currentStudentLiveSession.hasAnsweredCurrentQuestion = false;
                    currentStudentLiveSession.lastAnswer = null;
                    studentSubmittedAnswer = false;

                    renderStudentQuestionView();
                    showStudentLiveScreen("studentLiveQuiz");
                    startStudentQuestionTimer(comp.questionDuration || 60);
                } else {
                    // Already on this question index: if not answered, stay on question view
                    if (!currentStudentLiveSession.hasAnsweredCurrentQuestion) {
                        showStudentLiveScreen("studentLiveQuiz");
                    }
                }
            } else if (phase === "feedback") {
                // Between questions / answer feedback
                if (!currentStudentLiveSession.hasAnsweredCurrentQuestion) {
                    currentStudentLiveSession.hasAnsweredCurrentQuestion = true;
                    studentSubmittedAnswer = true;
                    currentStudentLiveSession.wrongCount = (currentStudentLiveSession.wrongCount || 0) + 1;
                    currentStudentLiveSession.answeredCount = (currentStudentLiveSession.answeredCount || 0) + 1;
                    showStudentInstantFeedback(null, qIdx);
                }
                const summary = (comp.answersSummary && comp.answersSummary[qIdx]) || { 0: 0, 1: 0, 2: 0, 3: 0, total: 0 };
                handleShowResultStudent({ answersSummary: summary, totalAnswered: summary.total || 0 });
            } else if (phase === "leaderboard") {
                db.collection("liveCompetitions").doc(code).collection("participants").get().then(snap => {
                    const participants = [];
                    snap.forEach(d => {
                        const pData = d.data();
                        participants.push({
                            id: d.id,
                            participantId: d.id,
                            studentName: pData.studentName || pData.name || "Student",
                            name: pData.studentName || pData.name || "Student",
                            score: pData.score || 0,
                            correctAnswers: pData.correctAnswers || 0,
                            wrongAnswers: pData.wrongAnswers || 0,
                            answeredCount: pData.answeredCount || 0,
                            joinedAt: pData.joinedAt || 0
                        });
                    });
                    participants.sort((a, b) => {
                        if ((b.score || 0) !== (a.score || 0)) return (b.score || 0) - (a.score || 0);
                        if ((b.correctAnswers || 0) !== (a.correctAnswers || 0)) return (b.correctAnswers || 0) - (a.correctAnswers || 0);
                        return (a.joinedAt || 0) - (b.joinedAt || 0);
                    });
                    handleShowLeaderboardStudent({ leaderboard: participants });
                }).catch(e => console.warn("[SKQ Student] Leaderboard fetch error:", e));
            } else if (phase === "finished" || comp.status === "completed") {
                clearInterval(liveTimerInterval);
                console.log("[SKQ Student] Quiz finished. Loading final leaderboard.");
                loadStudentFinalPodiumAndLeaderboard(code);
            }
        }, err => console.warn("[SKQ Student] Firestore listener error:", err));
    }
}

/* --- Student Live Question & Answer Flow --- */

function handleQuizStartedStudent(competition) {
    if (!currentStudentLiveSession) return;

    if (competition && competition.questions) {
        currentStudentLiveSession.competition.questions = competition.questions.map(normalizeLiveQuestion).filter(Boolean);
        currentStudentLiveSession.competition.totalQuestions = currentStudentLiveSession.competition.questions.length;
    }
    currentStudentLiveSession.currentQuestionIndex = 0;
    currentStudentLiveSession.hasStartedQuiz = true;
    currentStudentLiveSession.hasAnsweredCurrentQuestion = false;
    currentStudentLiveSession.lastAnswer = null;
    studentSubmittedAnswer = false;

    renderStudentQuestionView();
    showStudentLiveScreen("studentLiveQuiz");
    startStudentQuestionTimer(competition ? (competition.questionDuration || 60) : 60);
}

function handleNextQuestionStudent(competition) {
    if (!currentStudentLiveSession) return;

    if (competition && competition.questions) {
        currentStudentLiveSession.competition.questions = competition.questions.map(normalizeLiveQuestion).filter(Boolean);
        currentStudentLiveSession.competition.totalQuestions = currentStudentLiveSession.competition.questions.length;
    }
    const qIdx = competition ? (competition.currentQuestionIndex || 0) : 0;
    currentStudentLiveSession.currentQuestionIndex = qIdx;
    currentStudentLiveSession.hasAnsweredCurrentQuestion = false;
    currentStudentLiveSession.lastAnswer = null;
    studentSubmittedAnswer = false;

    renderStudentQuestionView();
    showStudentLiveScreen("studentLiveQuiz");
    startStudentQuestionTimer(competition ? (competition.questionDuration || 60) : 60);
}

function renderStudentQuestion() {
    renderStudentQuestionView();
}

function renderStudentQuestionView() {
    if (!currentStudentLiveSession || !currentStudentLiveSession.competition) return;

    const comp = currentStudentLiveSession.competition;
    const qIdx = currentStudentLiveSession.currentQuestionIndex >= 0 ? currentStudentLiveSession.currentQuestionIndex : 0;
    const questions = comp.questions || [];
    const rawQ = questions[qIdx];
    if (!rawQ) return;
    const q = normalizeLiveQuestion(rawQ);

    const totalQ = comp.totalQuestions || questions.length;

    // Quiz Title & Subject
    const titleElem = document.getElementById("sLiveQuizTitle");
    if (titleElem) titleElem.textContent = comp.title || comp.subject || "Live Quiz";
    const subElem = document.getElementById("sLiveSubjectBadge");
    if (subElem) subElem.textContent = comp.subject || "Live Competition";

    // Score & Question counter
    const scoreBadge = document.getElementById("sLiveScoreBadge");
    if (scoreBadge) scoreBadge.textContent = `Score: ${(currentStudentLiveSession.score || 0).toLocaleString()} pts`;

    const qBadge = document.getElementById("sLiveQBadge");
    if (qBadge) qBadge.textContent = `Question ${qIdx + 1} of ${totalQ}`;

    const qText = document.getElementById("sLiveQuestionText");
    if (qText) qText.textContent = q.question;

    renderAnswerOptions(q.options, -1, false);

    const promptElem = document.getElementById("sLiveSelectPrompt");
    if (promptElem) promptElem.textContent = "Select one answer";

    const feedback = document.getElementById("sAnswerFeedback");
    if (feedback) {
        feedback.className = "student-feedback-box hidden";
        feedback.classList.add("hidden");
    }
}

function renderAnswerOptions(options, selectedIndex = -1, isSubmitted = false) {
    const opts = options || [];
    const optIds = ["sOptTextA", "sOptTextB", "sOptTextC", "sOptTextD"];
    optIds.forEach((id, idx) => {
        const elem = document.getElementById(id);
        if (elem) elem.textContent = opts[idx] || "";
    });

    document.querySelectorAll(".student-option-btn").forEach((btn, idx) => {
        btn.disabled = isSubmitted;
        btn.classList.remove("selected-option", "is-correct-answer", "is-wrong-answer");
        if (selectedIndex === idx) {
            btn.classList.add("selected-option");
        }
    });
}

function handleStudentAnswer(optionIndex) {
    submitStudentLiveAnswer(optionIndex);
}

function showAnswerFeedback(lastAnswer, qIdx) {
    showStudentInstantFeedback(lastAnswer, qIdx);
}

function renderStudentFinishedScreen() {
    if (currentStudentLiveSession && currentStudentLiveSession.code) {
        loadStudentFinalPodiumAndLeaderboard(currentStudentLiveSession.code);
    }
}

function renderStudentLeaderboard(participants) {
    handleShowLeaderboardStudent({ leaderboard: participants });
}

function startStudentQuestionTimer(duration = 60) {
    clearInterval(liveTimerInterval);
    liveTimeRemaining = duration;

    const timerElem = document.getElementById("sLiveTimer");
    if (timerElem) timerElem.textContent = liveTimeRemaining;

    liveTimerInterval = setInterval(() => {
        liveTimeRemaining--;
        if (timerElem) timerElem.textContent = Math.max(0, liveTimeRemaining);

        if (liveTimeRemaining <= 0) {
            clearInterval(liveTimerInterval);
            // Disable buttons if time runs out
            document.querySelectorAll(".student-option-btn").forEach(btn => {
                btn.disabled = true;
            });
            // If user hasn't submitted, show unanswered feedback
            if (currentStudentLiveSession && !currentStudentLiveSession.hasAnsweredCurrentQuestion) {
                currentStudentLiveSession.hasAnsweredCurrentQuestion = true;
                studentSubmittedAnswer = true;
                currentStudentLiveSession.wrongCount = (currentStudentLiveSession.wrongCount || 0) + 1;
                currentStudentLiveSession.answeredCount = (currentStudentLiveSession.answeredCount || 0) + 1;
                showStudentInstantFeedback(null, currentStudentLiveSession.currentQuestionIndex || 0);
            }
        }
    }, 1000);
}

function submitStudentLiveAnswer(optionIndex) {
    if (!currentStudentLiveSession) return;
    if (currentStudentLiveSession.hasAnsweredCurrentQuestion || studentSubmittedAnswer || liveTimeRemaining <= 0) return;

    currentStudentLiveSession.hasAnsweredCurrentQuestion = true;
    studentSubmittedAnswer = true;

    // Immediately disable all 4 buttons to prevent multiple clicks
    const optionButtons = document.querySelectorAll(".student-option-btn");
    optionButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === optionIndex) {
            btn.classList.add("selected-option");
        }
    });

    const comp = currentStudentLiveSession.competition;
    const qIdx = currentStudentLiveSession.currentQuestionIndex >= 0 ? currentStudentLiveSession.currentQuestionIndex : 0;
    const questions = comp.questions || [];
    const question = normalizeLiveQuestion(questions[qIdx]);
    if (!question) return;

    const isCorrect = (optionIndex === question.answer);

    // Scoring: 1000 base + speed bonus up to 500, 0 for incorrect
    let pointsAwarded = 0;
    if (isCorrect) {
        const speedBonus = Math.round(500 * (Math.max(liveTimeRemaining, 0) / 60));
        pointsAwarded = 1000 + speedBonus;
        currentStudentLiveSession.correctCount = (currentStudentLiveSession.correctCount || 0) + 1;
    } else {
        pointsAwarded = 0;
        currentStudentLiveSession.wrongCount = (currentStudentLiveSession.wrongCount || 0) + 1;
    }

    currentStudentLiveSession.answeredCount = (currentStudentLiveSession.answeredCount || 0) + 1;
    currentStudentLiveSession.score = (currentStudentLiveSession.score || 0) + pointsAwarded;

    currentStudentLiveSession.lastAnswer = {
        questionIndex: qIdx,
        optionIndex: optionIndex,
        selectedOption: optionIndex,
        correctOption: question.answer,
        isCorrect: isCorrect,
        pointsAwarded: pointsAwarded,
        pointsEarned: pointsAwarded,
        timeRemaining: liveTimeRemaining
    };

    console.log("[SKQ Student] Student answer submitted:", {
        competitionCode: currentStudentLiveSession.code,
        participantId: currentStudentLiveSession.studentId,
        studentName: currentStudentLiveSession.studentName,
        questionIndex: qIdx,
        selectedOption: optionIndex,
        isCorrect: isCorrect,
        pointsEarned: pointsAwarded
    });
    console.log("[SKQ Student] Answer correctness:", isCorrect);
    console.log("[SKQ Student] Score updated:", currentStudentLiveSession.score);

    // Update score badge and prompt text
    const scoreBadge = document.getElementById("sLiveScoreBadge");
    if (scoreBadge) scoreBadge.textContent = `Score: ${(currentStudentLiveSession.score || 0).toLocaleString()} pts`;

    const promptElem = document.getElementById("sLiveSelectPrompt");
    if (promptElem) promptElem.textContent = "Answer submitted — waiting for host...";

    // Display INSTANT feedback on student's screen
    showStudentInstantFeedback(currentStudentLiveSession.lastAnswer, qIdx);

    // Highlight buttons: green for correct, red for incorrect
    if (isCorrect) {
        if (optionButtons[optionIndex]) optionButtons[optionIndex].classList.add("is-correct-answer");
    } else {
        if (optionButtons[optionIndex]) optionButtons[optionIndex].classList.add("is-wrong-answer");
        if (optionButtons[question.answer]) optionButtons[question.answer].classList.add("is-correct-answer");
    }

    // Save answer to Firestore
    if (typeof db !== "undefined" && db) {
        const code = currentStudentLiveSession.code;
        const studentId = currentStudentLiveSession.studentId;
        const studentName = currentStudentLiveSession.studentName;

        const answerPayload = {
            competitionCode: code,
            participantId: studentId,
            studentName: studentName,
            questionIndex: qIdx,
            selectedOption: optionIndex,
            correctOption: question.answer,
            selectedOptionText: question.options[optionIndex] || "",
            correctOptionText: question.options[question.answer] || "",
            isCorrect: isCorrect,
            pointsEarned: pointsAwarded,
            answeredAt: firebase.firestore.FieldValue.serverTimestamp() || Date.now()
        };

        // 1. Write to liveCompetitions/{code}/answers
        db.collection("liveCompetitions").doc(code)
            .collection("answers").add(answerPayload)
            .catch(e => console.warn("[SKQ Student] Subcollection answer notice:", e));

        // 2. Update participant document
        db.collection("liveCompetitions").doc(code)
            .collection("participants").doc(studentId)
            .update({
                score: currentStudentLiveSession.score,
                correctAnswers: currentStudentLiveSession.correctCount || 0,
                wrongAnswers: currentStudentLiveSession.wrongCount || 0,
                answeredCount: currentStudentLiveSession.answeredCount || 0,
                currentQuestionIndex: qIdx,
                connected: true,
                lastUpdated: firebase.firestore.FieldValue.serverTimestamp() || Date.now()
            })
            .catch(e => console.warn("[SKQ Student] Participant score update notice:", e));

        // 3. Write to competitionAnswers for audit trail
        db.collection("competitionAnswers").add({
            ...answerPayload,
            pointsAwarded: pointsAwarded,
            timeRemaining: liveTimeRemaining
        }).catch(e => console.warn("[SKQ Student] competitionAnswers notice:", e));
    }

    // Broadcast to host (for same-device multi-tab testing)
    broadcastLiveEvent({
        type: "ANSWER_SUBMITTED",
        code: currentStudentLiveSession.code,
        studentId: currentStudentLiveSession.studentId,
        studentName: currentStudentLiveSession.studentName,
        questionIndex: qIdx,
        optionIndex: optionIndex,
        isCorrect: isCorrect,
        pointsAwarded: pointsAwarded,
        timeRemaining: liveTimeRemaining
    });
}

function showStudentInstantFeedback(lastAnswer, qIdx) {
    const feedbackBox = document.getElementById("sAnswerFeedback");
    if (!feedbackBox) return;

    const comp = currentStudentLiveSession ? currentStudentLiveSession.competition : null;
    const questions = comp ? (comp.questions || []) : [];
    const rawQ = questions[qIdx];
    const question = rawQ ? normalizeLiveQuestion(rawQ) : null;

    feedbackBox.classList.remove("hidden");

    if (lastAnswer && lastAnswer.isCorrect) {
        feedbackBox.className = "student-feedback-box feedback-correct";
        feedbackBox.innerHTML = `
            <span class="feedback-icon" style="font-size: 1.8rem;">🎉</span>
            <div class="feedback-text-wrap" style="text-align: left; flex: 1;">
                <div style="font-size: 1.2rem; font-weight: 800; color: #10b981;">Correct answer!</div>
                <div style="font-size: 1rem; font-weight: 700; color: #10b981; margin-top: 2px;">+${(lastAnswer.pointsAwarded || lastAnswer.pointsEarned || 0).toLocaleString()} points</div>
                <div style="font-size: 0.85rem; margin-top: 4px; opacity: 0.85;">Answer submitted. Waiting for the next question...</div>
            </div>
        `;
    } else if (lastAnswer && !lastAnswer.isCorrect) {
        feedbackBox.className = "student-feedback-box feedback-incorrect";
        const correctLetter = question ? String.fromCharCode(65 + question.answer) : "";
        const correctText = question ? question.options[question.answer] : "";
        feedbackBox.innerHTML = `
            <span class="feedback-icon" style="font-size: 1.8rem;">❌</span>
            <div class="feedback-text-wrap" style="text-align: left; flex: 1;">
                <div style="font-size: 1.2rem; font-weight: 800; color: #ef4444;">Incorrect answer</div>
                <div style="font-size: 0.95rem; font-weight: 700; color: #f59e0b; margin-top: 2px;">Correct answer: Option ${correctLetter} — "${correctText}"</div>
                <div style="font-size: 0.9rem; font-weight: 600; opacity: 0.8; margin-top: 2px;">+0 points</div>
                <div style="font-size: 0.85rem; margin-top: 4px; opacity: 0.85;">Answer submitted. Waiting for the next question...</div>
            </div>
        `;
    } else {
        // Timed out / unanswered
        feedbackBox.className = "student-feedback-box feedback-incorrect";
        const correctLetter = question ? String.fromCharCode(65 + question.answer) : "";
        const correctText = question ? question.options[question.answer] : "";
        feedbackBox.innerHTML = `
            <span class="feedback-icon" style="font-size: 1.8rem;">⏱️</span>
            <div class="feedback-text-wrap" style="text-align: left; flex: 1;">
                <div style="font-size: 1.2rem; font-weight: 800; color: #ef4444;">Time's Up! (Unanswered)</div>
                <div style="font-size: 0.95rem; font-weight: 700; color: #f59e0b; margin-top: 2px;">Correct answer: Option ${correctLetter} — "${correctText}"</div>
                <div style="font-size: 0.9rem; font-weight: 600; opacity: 0.8; margin-top: 2px;">+0 points</div>
                <div style="font-size: 0.85rem; margin-top: 4px; opacity: 0.85;">Waiting for the host to move to the next question...</div>
            </div>
        `;
    }
}

function handleShowResultStudent(event) {
    clearInterval(liveTimerInterval);

    const last = currentStudentLiveSession ? currentStudentLiveSession.lastAnswer : null;
    const banner = document.getElementById("sResultBanner");
    const statusText = document.getElementById("sResultStatus");
    const pointsText = document.getElementById("sResultPoints");
    const iconElem = document.getElementById("sResultIcon");

    if (last && last.isCorrect) {
        banner.className = "s-result-banner banner-correct";
        iconElem.textContent = "🎉";
        statusText.textContent = "Correct!";
        pointsText.textContent = `+${(last.pointsAwarded || last.pointsEarned || 0).toLocaleString()} Points`;
    } else {
        banner.className = "s-result-banner banner-wrong";
        iconElem.textContent = "❌";
        statusText.textContent = last ? "Incorrect!" : "Time's Up!";
        pointsText.textContent = "+0 Points";
    }

    // Render Student small bar graph
    const summary = event.answersSummary || { 0: 0, 1: 0, 2: 0, 3: 0 };
    const base = event.totalAnswered > 0 ? event.totalAnswered : 1;

    const pA = Math.round(((summary[0] || 0) / base) * 100);
    const pB = Math.round(((summary[1] || 0) / base) * 100);
    const pC = Math.round(((summary[2] || 0) / base) * 100);
    const pD = Math.round(((summary[3] || 0) / base) * 100);

    document.getElementById("sValBarA").textContent = summary[0] || 0;
    document.getElementById("sValBarB").textContent = summary[1] || 0;
    document.getElementById("sValBarC").textContent = summary[2] || 0;
    document.getElementById("sValBarD").textContent = summary[3] || 0;

    setTimeout(() => {
        document.getElementById("sPillarA").style.height = `${pA}%`;
        document.getElementById("sPillarB").style.height = `${pB}%`;
        document.getElementById("sPillarC").style.height = `${pC}%`;
        document.getElementById("sPillarD").style.height = `${pD}%`;
    }, 100);

    showStudentLiveScreen("studentResult");
}

function handleShowLeaderboardStudent(event) {
    const leaderboard = event.leaderboard || [];
    const myId = currentStudentLiveSession ? currentStudentLiveSession.studentId : null;

    let myRank = "-";
    let myScore = currentStudentLiveSession ? currentStudentLiveSession.score : 0;

    leaderboard.forEach((p, idx) => {
        if (p.id === myId || p.participantId === myId) {
            myRank = `#${idx + 1}`;
            myScore = p.score || myScore;
        }
    });

    document.getElementById("sMyLiveScore").textContent = `${myScore.toLocaleString()} pts`;
    document.getElementById("sMyLiveRank").textContent = `Rank ${myRank}`;

    renderLeaderboardTable("sLeaderboardTableContainer", leaderboard, myId);

    showStudentLiveScreen("studentLeaderboard");
}

async function loadStudentFinalPodiumAndLeaderboard(code) {
    if (typeof db === "undefined" || !db) return;

    try {
        const snap = await db.collection("liveCompetitions").doc(code)
            .collection("participants").get();

        const participants = [];
        snap.forEach(d => {
            const pData = d.data();
            participants.push({
                id: d.id,
                participantId: d.id,
                studentName: pData.studentName || pData.name || "Student",
                name: pData.studentName || pData.name || "Student",
                score: pData.score || 0,
                correctAnswers: pData.correctAnswers || 0,
                wrongAnswers: pData.wrongAnswers || 0,
                answeredCount: pData.answeredCount || 0,
                joinedAt: pData.joinedAt || 0
            });
        });

        // Sort by: 1. highest score, 2. highest correct answers, 3. joinedAt asc
        participants.sort((a, b) => {
            if ((b.score || 0) !== (a.score || 0)) return (b.score || 0) - (a.score || 0);
            if ((b.correctAnswers || 0) !== (a.correctAnswers || 0)) return (b.correctAnswers || 0) - (a.correctAnswers || 0);
            return (a.joinedAt || 0) - (b.joinedAt || 0);
        });

        console.log("[SKQ Student] Leaderboard loaded. Total participants in room:", participants.length);

        const myId = currentStudentLiveSession ? currentStudentLiveSession.studentId : null;
        let myRank = 1;
        let myData = null;

        participants.forEach((p, idx) => {
            if (p.id === myId || p.participantId === myId) {
                myRank = idx + 1;
                myData = p;
            }
        });

        const comp = currentStudentLiveSession ? currentStudentLiveSession.competition : null;
        const totalQ = comp ? (comp.totalQuestions || (comp.questions && comp.questions.length) || 1) : 1;
        const myScore = myData ? myData.score : (currentStudentLiveSession ? currentStudentLiveSession.score : 0);
        const myCorrect = myData ? myData.correctAnswers : (currentStudentLiveSession ? (currentStudentLiveSession.correctCount || 0) : 0);
        const myWrong = myData ? myData.wrongAnswers : (currentStudentLiveSession ? (currentStudentLiveSession.wrongCount || 0) : 0);
        const myPct = totalQ > 0 ? Math.round((myCorrect / totalQ) * 100) : 0;

        const rankText = myRank > 0 ? `You placed ${myRank === 1 ? '1st 🥇' : myRank === 2 ? '2nd 🥈' : myRank === 3 ? '3rd 🥉' : '#' + myRank}!` : "Competition Complete!";
        document.getElementById("sMyFinalRankText").textContent = rankText;
        document.getElementById("sMyFinalScoreText").textContent = `Total Score: ${myScore.toLocaleString()} pts | Correct: ${myCorrect}/${totalQ} (${myPct}%)`;

        const medals = { 1: "🥇", 2: "🥈", 3: "🥉" };
        document.getElementById("sMyFinalMedal").textContent = medals[myRank] || "🎖️";

        // Set top 3 podium
        const w1 = participants[0] || { studentName: "-", score: 0 };
        const w2 = participants[1] || { studentName: "-", score: 0 };
        const w3 = participants[2] || { studentName: "-", score: 0 };

        document.getElementById("sPodium1Name").textContent = w1.studentName || w1.name || "-";
        document.getElementById("sPodium1Score").textContent = `${(w1.score || 0).toLocaleString()} pts`;

        document.getElementById("sPodium2Name").textContent = w2.studentName || w2.name || "-";
        document.getElementById("sPodium2Score").textContent = `${(w2.score || 0).toLocaleString()} pts`;

        document.getElementById("sPodium3Name").textContent = w3.studentName || w3.name || "-";
        document.getElementById("sPodium3Score").textContent = `${(w3.score || 0).toLocaleString()} pts`;

        // Render Detailed Leaderboard Table
        renderDetailedLeaderboardTable("sDetailedLeaderboardContainer", participants, myId, totalQ);

        createConfetti();
        showStudentLiveScreen("studentPodium");

        // Save student result to competitionResults collection (once)
        if (!currentStudentLiveSession._resultSaved) {
            currentStudentLiveSession._resultSaved = true;
            db.collection("competitionResults").add({
                competitionCode: currentStudentLiveSession.code,
                studentId: currentStudentLiveSession.studentId,
                studentName: currentStudentLiveSession.studentName,
                finalScore: myScore,
                rank: myRank,
                totalQuestions: totalQ,
                correctAnswers: myCorrect,
                wrongAnswers: myWrong,
                percentage: myPct,
                submittedAt: firebase.firestore.FieldValue.serverTimestamp()
            }).catch(err => console.warn("[SKQ Student] competitionResults notice:", err));
        }

    } catch (err) {
        console.error("[SKQ Student] Final podium error:", err);
    }
}

function handleShowPodiumStudent(event) {
    if (!currentStudentLiveSession) return;
    loadStudentFinalPodiumAndLeaderboard(currentStudentLiveSession.code);
}

/* =====================================================
   AUTO-INITIALIZE IF REFRESHED / RESUMED
===================================================== */

function checkAndHandleUrlJoin() {
    try {
        const savedTeacher = localStorage.getItem("skillquest_teacher");
        if (savedTeacher) {
            currentTeacher = JSON.parse(savedTeacher);
        }
    } catch(e) {}

    // Check if URL has ?join=SKQ-XXXXXX
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("join")) {
        console.log("[SKQ Student] Auto-opening join screen for URL code:", urlParams.get("join"));
        openStudentJoinPage();
    }
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", checkAndHandleUrlJoin);
} else {
    checkAndHandleUrlJoin();
}

/* =====================================================
   STAFF-CREATED QUIZ BUILDER SYSTEM
===================================================== */

let customQuestionsData = [];

function escapeHtml(str) {
    if (typeof str !== "string") return "";
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function openStaffQuizBuilder() {
    showTeacherPage("teacherCreate");
    switchCreateTab("custom");
    document.querySelectorAll(".teacher-navbar nav button").forEach(btn => btn.classList.remove("active"));
    const btn = document.getElementById("tNavCreateQuiz");
    if (btn) btn.classList.add("active");
}

function switchCreateTab(tabName) {
    const customPanel = document.getElementById("staffQuizBuilderPanel");
    const autoPanel = document.getElementById("autoQuizBuilderPanel");
    const tabBtnCustom = document.getElementById("tabBtnCustomQuiz");
    const tabBtnAuto = document.getElementById("tabBtnAutoQuiz");

    if (tabName === "custom") {
        if (customPanel) customPanel.classList.remove("hidden");
        if (autoPanel) autoPanel.classList.add("hidden");
        if (tabBtnCustom) tabBtnCustom.classList.add("active");
        if (tabBtnAuto) tabBtnAuto.classList.remove("active");

        const navCustom = document.getElementById("tNavCreateQuiz");
        const navAuto = document.getElementById("tNavCreate");
        if (navCustom) navCustom.classList.add("active");
        if (navAuto) navAuto.classList.remove("active");

        // Initialize with default slots if empty
        if (customQuestionsData.length === 0) {
            presetCustomQuestions(5);
        } else {
            renderCustomQuestions();
        }
    } else {
        if (customPanel) customPanel.classList.add("hidden");
        if (autoPanel) autoPanel.classList.remove("hidden");
        if (tabBtnCustom) tabBtnCustom.classList.remove("active");
        if (tabBtnAuto) tabBtnAuto.classList.add("active");

        const navCustom = document.getElementById("tNavCreateQuiz");
        const navAuto = document.getElementById("tNavCreate");
        if (navAuto) navAuto.classList.add("active");
        if (navCustom) navCustom.classList.remove("active");

        onSubjectConfigChange();
    }
}

function presetCustomQuestions(count) {
    syncCustomQuestionsFromDOM();
    for (let i = 0; i < count; i++) {
        const newId = Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 6);
        customQuestionsData.push({
            id: newId,
            question: "",
            options: ["", "", "", ""],
            answer: null
        });
    }
    renderCustomQuestions();
    updateStaffQCountBadge();
    showToast(`⚡ Added ${count} question slots! Total: ${customQuestionsData.length}`);
}

function addCustomQuestion(initialData = null) {
    syncCustomQuestionsFromDOM();
    const newId = Date.now().toString(36) + "_" + Math.random().toString(36).substring(2, 6);
    const newQ = initialData || {
        id: newId,
        question: "",
        options: ["", "", "", ""],
        answer: null
    };
    customQuestionsData.push(newQ);
    renderCustomQuestions();
    updateStaffQCountBadge();

    // Smooth scroll to the newly added question
    setTimeout(() => {
        const card = document.getElementById(`q_card_${newQ.id}`);
        if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
            const textarea = card.querySelector(".custom-q-textarea");
            if (textarea) textarea.focus();
        }
    }, 80);
}

function deleteCustomQuestion(id) {
    const idx = customQuestionsData.findIndex(q => q.id === id);
    if (idx !== -1) {
        syncCustomQuestionsFromDOM();
        customQuestionsData.splice(idx, 1);
        renderCustomQuestions();
        updateStaffQCountBadge();
        showToast("🗑️ Question removed");
    }
}

function syncCustomQuestionsFromDOM() {
    customQuestionsData.forEach(q => {
        const card = document.getElementById(`q_card_${q.id}`);
        if (!card) return;
        const textarea = card.querySelector(".custom-q-textarea");
        if (textarea) q.question = textarea.value;

        for (let i = 0; i < 4; i++) {
            const optInput = document.getElementById(`opt_text_${q.id}_${i}`);
            if (optInput) q.options[i] = optInput.value;
            const radio = document.getElementById(`opt_radio_${q.id}_${i}`);
            if (radio && radio.checked) q.answer = i;
        }
    });
}

function onCorrectAnswerChange(id, optIdx) {
    const q = customQuestionsData.find(item => item.id === id);
    if (q) {
        q.answer = optIdx;
    }
    for (let i = 0; i < 4; i++) {
        const row = document.getElementById(`opt_row_${id}_${i}`);
        if (row) {
            if (i === optIdx) {
                row.classList.add("is-correct-selected");
                let badge = row.querySelector(".correct-indicator-tag");
                if (!badge) {
                    badge = document.createElement("span");
                    badge.className = "correct-indicator-tag";
                    badge.textContent = "✓ Correct Answer";
                    row.appendChild(badge);
                }
            } else {
                row.classList.remove("is-correct-selected");
                const badge = row.querySelector(".correct-indicator-tag");
                if (badge) badge.remove();
            }
        }
    }
    const card = document.getElementById(`q_card_${id}`);
    if (card) card.classList.remove("validation-error");
}

function onCustomQuestionTextInput(id, val) {
    const q = customQuestionsData.find(item => item.id === id);
    if (q) q.question = val;
    const card = document.getElementById(`q_card_${id}`);
    if (card) card.classList.remove("validation-error");
}

function onCustomOptInput(id, optIdx, val) {
    const q = customQuestionsData.find(item => item.id === id);
    if (q) {
        if (!q.options) q.options = ["", "", "", ""];
        q.options[optIdx] = val;
    }
    const card = document.getElementById(`q_card_${id}`);
    if (card) card.classList.remove("validation-error");
}

function updateStaffQCountBadge() {
    const badge = document.getElementById("staffQCountBadge");
    if (badge) {
        badge.textContent = customQuestionsData.length;
    }
}

function renderCustomQuestions() {
    const container = document.getElementById("staffQuestionsList");
    if (!container) return;

    if (customQuestionsData.length === 0) {
        container.innerHTML = `
            <div class="empty-questions-notice">
                <p>No questions created yet. Click "+ Add Question" or pick a quick slot preset above!</p>
                <button type="button" class="primary-btn teacher-primary-btn" onclick="addCustomQuestion()">
                    ➕ Add First Question
                </button>
            </div>
        `;
        updateStaffQCountBadge();
        return;
    }

    const letters = ["A", "B", "C", "D"];
    let html = "";

    customQuestionsData.forEach((q, idx) => {
        let optionsHtml = "";
        for (let optIdx = 0; optIdx < 4; optIdx++) {
            const isCorrect = q.answer === optIdx;
            const optVal = (q.options && q.options[optIdx]) ? escapeHtml(q.options[optIdx]) : "";
            optionsHtml += `
                <div class="custom-opt-row ${isCorrect ? 'is-correct-selected' : ''}" id="opt_row_${q.id}_${optIdx}">
                    <input type="radio" 
                           class="custom-opt-radio" 
                           name="correct_radio_${q.id}" 
                           id="opt_radio_${q.id}_${optIdx}" 
                           value="${optIdx}" 
                           ${isCorrect ? 'checked' : ''} 
                           onchange="onCorrectAnswerChange('${q.id}', ${optIdx})"
                           title="Mark Option ${letters[optIdx]} as correct answer">
                    <span class="opt-letter-tag">${letters[optIdx]}</span>
                    <input type="text" 
                           id="opt_text_${q.id}_${optIdx}" 
                           class="custom-opt-input" 
                           placeholder="Option ${letters[optIdx]} text..." 
                           value="${optVal}"
                           oninput="onCustomOptInput('${q.id}', ${optIdx}, this.value)">
                    ${isCorrect ? '<span class="correct-indicator-tag">✓ Correct Answer</span>' : ''}
                </div>
            `;
        }

        html += `
            <div class="custom-q-card" id="q_card_${q.id}">
                <div class="custom-q-card-header">
                    <div class="q-badge-num">
                        <span>Question #${idx + 1}</span>
                    </div>
                    <button type="button" class="btn-delete-q" onclick="deleteCustomQuestion('${q.id}')" title="Delete this question">
                        🗑️ Delete
                    </button>
                </div>

                <textarea class="custom-q-textarea" 
                          id="q_text_${q.id}" 
                          placeholder="Enter question text (e.g. Which algorithm has O(n log n) average time complexity?)..."
                          oninput="onCustomQuestionTextInput('${q.id}', this.value)">${escapeHtml(q.question || "")}</textarea>

                <div class="options-heading-helper">
                    <span>Options (Select one radio button for the correct answer):</span>
                    <span style="font-size: 0.8rem; color: #10b981; font-weight: 700;">● Exactly 1 Correct Answer</span>
                </div>

                <div class="custom-options-grid">
                    ${optionsHtml}
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
    updateStaffQCountBadge();
}

function validateCustomQuiz() {
    syncCustomQuestionsFromDOM();

    // 1. Validate Quiz Title
    const titleInput = document.getElementById("staffQuizTitle");
    const title = titleInput ? titleInput.value.trim() : "";
    if (!title) {
        showToast("⚠️ Please enter a Quiz Title before publishing!");
        if (titleInput) {
            titleInput.focus();
            titleInput.scrollIntoView({ behavior: "smooth", block: "center" });
        }
        return false;
    }

    // 2. Validate Question Count
    if (customQuestionsData.length === 0) {
        showToast("⚠️ Your quiz must have at least 1 question. Click '+ Add Question'!");
        return false;
    }

    // 3. Clear previous highlights
    document.querySelectorAll(".custom-q-card").forEach(c => c.classList.remove("validation-error"));

    const letters = ["A", "B", "C", "D"];

    // 4. Validate each question
    for (let i = 0; i < customQuestionsData.length; i++) {
        const q = customQuestionsData[i];
        const card = document.getElementById(`q_card_${q.id}`);

        // A. Validate Question Text
        if (!q.question || !q.question.trim()) {
            showToast(`⚠️ Question #${i + 1} is missing question text!`);
            if (card) {
                card.classList.add("validation-error");
                card.scrollIntoView({ behavior: "smooth", block: "center" });
                const ta = card.querySelector(".custom-q-textarea");
                if (ta) ta.focus();
            }
            return false;
        }

        // B. Validate Exactly 4 Options
        if (!q.options || q.options.length !== 4) {
            showToast(`⚠️ Question #${i + 1} must have 4 options!`);
            if (card) {
                card.classList.add("validation-error");
                card.scrollIntoView({ behavior: "smooth", block: "center" });
            }
            return false;
        }

        for (let optIdx = 0; optIdx < 4; optIdx++) {
            const optText = q.options[optIdx] ? q.options[optIdx].trim() : "";
            if (!optText) {
                showToast(`⚠️ Question #${i + 1}: Option ${letters[optIdx]} cannot be empty!`);
                if (card) {
                    card.classList.add("validation-error");
                    card.scrollIntoView({ behavior: "smooth", block: "center" });
                    const optInp = document.getElementById(`opt_text_${q.id}_${optIdx}`);
                    if (optInp) optInp.focus();
                }
                return false;
            }
        }

        // C. Validate 1 Correct Answer Selection
        if (q.answer === null || q.answer === undefined || q.answer < 0 || q.answer > 3) {
            showToast(`⚠️ Question #${i + 1}: Please select which option (A, B, C, or D) is the correct answer!`);
            if (card) {
                card.classList.add("validation-error");
                card.scrollIntoView({ behavior: "smooth", block: "center" });
            }
            return false;
        }
    }

    return true;
}

async function publishStaffCreatedQuiz() {
    if (!validateCustomQuiz()) {
        return;
    }

    syncCustomQuestionsFromDOM();

    const title = (document.getElementById("staffQuizTitle").value || "Staff Quiz").trim();
    const subject = (document.getElementById("staffQuizSubject").value || "Staff Quiz").trim();
    const duration = parseInt(document.getElementById("staffQuizDuration").value, 10) || 60;

    // Standardize questions format: { question, options: [A, B, C, D], answer: 0..3 }
    const formattedQuestions = customQuestionsData.map(q => ({
        question: q.question.trim(),
        options: q.options.map(opt => opt.trim()),
        answer: parseInt(q.answer, 10)
    }));

    // Sanitize for Firestore — removes undefined/null values that Firestore rejects
    const sanitizedQuestions = sanitizeQuestionsForFirestore(formattedQuestions);

    // Prepopulate generatedCompetitionQuestions with staff-created questions
    generatedCompetitionQuestions = sanitizedQuestions;

    const code = generateCompetitionCode();
    const count = sanitizedQuestions.length;
    const createdAtISO = new Date().toISOString();
    const expiresAtISO = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();
    const creatorName = currentTeacher ? (currentTeacher.name || currentTeacher.email || currentTeacher.teacherId || "Prof. Educator") : "Staff";

    showLoading("Creating & Saving Custom Quiz to Database...");

    const competitionData = {
        competitionCode: code,
        code: code,
        competitionType: "custom",
        createdBy: creatorName,
        teacherId: currentTeacher ? (currentTeacher.teacherId || currentTeacher.uid || "TEACHER-01") : "TEACHER-01",
        teacherName: currentTeacher ? currentTeacher.name : creatorName,
        title: title,
        subject: subject,
        status: "active",
        phase: "waiting",
        temporaryQuestions: sanitizedQuestions,
        questions: sanitizedQuestions,
        totalQuestions: count,
        currentQuestionIndex: 0,
        questionStartTime: null,
        questionStartedAt: null,
        questionEndedAt: null,
        questionDuration: duration,
        participantCount: 0,
        participants: {},
        answersSummary: {},
        isStaffCreated: true,
        createdAt: createdAtISO,
        expiresAt: expiresAtISO
    };

    // Strict Firestore verification: Verify db is available
    if (typeof db === "undefined" || !db) {
        hideLoading();
        console.error("[SKQ Teacher Custom] Firestore database instance (db) is not initialized!");
        alert("⚠️ Database connection error: Firestore is not initialized. Please refresh the page and ensure your internet connection is active.");
        return;
    }

    // Save to Firestore and confirm write succeeded
    try {
        const firestorePayload = {
            ...competitionData,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        };

        console.log("[SKQ Teacher Custom] Saving custom competition document to Firestore:", {
            competitionCode: code,
            documentId: code,
            collection: "liveCompetitions",
            status: "saving"
        });

        await db.collection("liveCompetitions").doc(code).set(firestorePayload);

        // Verify document was actually written to Firestore
        const verifySnap = await db.collection("liveCompetitions").doc(code).get();
        if (!verifySnap.exists) {
            throw new Error(`Document verification failed: Room "${code}" was not found in Firestore after write operation.`);
        }

        // Safe debugging log required by user
        console.log({
            competitionCode: code,
            documentId: code,
            collection: "liveCompetitions",
            status: "saved"
        });

    } catch (dbErr) {
        console.error("[SKQ Teacher Custom] Firestore write FAILED:", dbErr);
        hideLoading();
        alert(`⚠️ Failed to save competition to database: ${dbErr.message || dbErr}. Please try again.`);
        return; // Do NOT generate QR code or show waiting room if unsaved!
    }

    // ONLY after Firestore write is confirmed: Set active competition in memory
    activeHostCompetition = competitionData;
    try { localStorage.setItem("skillquest_active_competition", JSON.stringify(activeHostCompetition)); } catch(e) {}

    // Multi-tab synchronization broadcast
    setupBroadcastChannel(code);
    broadcastLiveEvent({ type: "ROOM_CREATED", competition: competitionData });

    hideLoading();

    // Render Waiting Room UI & QR Code ONLY after successful database write
    setupTeacherWaitingRoomUI(competitionData);
    showTeacherPage("teacherWaitingRoom");
    showToast(`🎉 Room Created & Saved! Join Code: ${code}`);

    // Listen for live participants
    attachHostCompetitionListeners(code);
}

async function saveCustomQuizDraft() {
    syncCustomQuestionsFromDOM();
    const title = (document.getElementById("staffQuizTitle").value || "Untitled Quiz").trim();
    const subject = (document.getElementById("staffQuizSubject").value || "Staff Quiz").trim();
    const duration = parseInt(document.getElementById("staffQuizDuration").value, 10) || 60;

    const draft = {
        title: title,
        subject: subject,
        questions: customQuestionsData,
        duration: duration,
        savedAt: new Date().toISOString()
    };

    localStorage.setItem("skillquest_staff_quiz_draft", JSON.stringify(draft));

    if (typeof db !== "undefined" && currentTeacher) {
        try {
            await db.collection("staffQuizzes").add({
                title: title,
                subject: subject,
                teacherId: currentTeacher.teacherId || currentTeacher.uid || "TEACHER-01",
                teacherName: currentTeacher.name || "Professor",
                questions: customQuestionsData,
                duration: duration,
                isDraft: true,
                createdAt: typeof firebase !== "undefined" && firebase.firestore 
                    ? firebase.firestore.FieldValue.serverTimestamp() 
                    : new Date().toISOString()
            });
        } catch (e) {
            console.warn("Draft save notice:", e);
        }
    }

    showToast("💾 Quiz draft saved successfully!");
}

