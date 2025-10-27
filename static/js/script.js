        const labels = document.querySelectorAll('.label')
        const flashcards =document.getElementById("flashcards")
        const container = document.getElementById("container")

        labels.forEach(label => {
            label.addEventListener("click",()=>{
            labels.forEach(l=>l.classList.remove("selected"))
            label.classList.add("selected")
            
        })
        })

        function Flashcards(){
            container.style.display = "grid"
            container.innerHTML = `
        <div class="folder" id="recherche-operationnel" name="recherche-operationnel" data-classe="RO">
            <i class="fa-solid fa-folder"></i>
            <span class="foldername">RO</span>
        </div>
        <div class="folder" id="machine-learning" name="machine-learning" data-classe="ML">
            <i class="fa-solid fa-folder"></i>
            <span class="foldername">ML</span>
        </div>
        <div class="folder" id="gestion-des-enterprises" name="gestion-des-enterprises" data-classe="GE">
            <i class="fa-solid fa-folder"></i>
            <span class="foldername">GE</span>
        </div>
        <div class="folder" id="securite" name="securite" data-classe="SEC">
            <i class="fa-solid fa-folder"></i>
            <span class="foldername">Securite</span>
        </div>
        <div class="folder" id="admin-system-reseaux" name="admin-system-reseaux" data-classe="ASR">
            <i class="fa-solid fa-folder"></i>
            <span class="foldername">Admin sys&rss</span>
        </div>
        <div class="folder" id="reseau-mobile" name="reseau-mobile" data-classe="RM">
            <i class="fa-solid fa-folder"></i>
            <span class="foldername">Reseau mobile</span>
        </div>
        <div class="folder" id="java" name="java" data-classe="JAVA">
            <i class="fa-solid fa-folder"></i>
            <span class="foldername">Java</span>
        </div>
        <div class="folder" id="sgbd" name="sgbd" data-classe="SGBD">
            <i class="fa-solid fa-folder"></i>
            <span class="foldername">SGBD</span>
        </div>
        <div class="folder" id="devops" name="devops" data-classe="DEVOPS">
            <i class="fa-solid fa-folder"></i>
            <span class="foldername">DevOps</span>
        </div>
        <div class="folder" id="genie-logiciel" name="genie-logiciel" data-classe="GL">
            <i class="fa-solid fa-folder"></i>
            <span class="foldername">Genie logiciel</span>
        </div>
        <div class="folder" id="python" name="python" data-classe="PY">
            <i class="fa-solid fa-folder"></i>
            <span class="foldername">Python</span>
        </div>
        <div class="folder" id="oracle" name="oracle" data-classe="ORA">
            <i class="fa-solid fa-folder"></i>
            <span class="foldername">Oracle</span>
        </div>        
            `
        addFolderListener()
        }

        function Main(){
            container.style.display = 'flex'
            container.innerHTML = `
            <div class="intro">
            <div class="cercle">
                <i class="iconoir-brain" id="brain"></i>
                <div class="h1">
                    <h1>Learn anything.</h1>
                    <h1>Fast.</h1>
                    <button id="startLearning">Start Learning</button>
                </div>
            </div>
            </div>
            <div class="sugget">
                <div class="flashcards" id="flashcards" onclick="Flashcards()">Flashcards</div>
                <div class="pdfs">PDFs & Summaries</div>
                <div class="exams">Start Exams</div>
            </div>
            `
        }
        function addFolderListener(){
            const folders = document.querySelectorAll(".folder")
            folders.forEach(
                folder => { 
                    folder.addEventListener("click",()=>{
                        container.innerHTML = ''
                    })
                }
            )
        }
        function PDFs_Summaries(){
            container.style.display = 'grid'
            container.innerHTML = `
            <div class="pdf" name="Recherche-Operationnel">
                <i class="fa-solid fa-file-pdf"></i>
                <span class="resumename">RO</span>
                <button class="download-btn" id="download">
                    <i class="fa-solid fa-download"></i> Download
                </button>
            </div>
            <div class="pdf" name="Machine-Learning">
                <i class="fa-solid fa-file-pdf"></i>
                <span class="resumename">ML</span>
                <button class="download-btn" id="download">
                    <i class="fa-solid fa-download"></i> Download
                </button>
            </div>
            <div class="pdf" name="Gestion-Enterprises">
                <i class="fa-solid fa-file-pdf"></i>
                <span class="resumename">GE</span>
                <button class="download-btn" id="download">
                    <i class="fa-solid fa-download"></i> Download
                </button>
            </div>
            <div class="pdf" name="Securite">
                <i class="fa-solid fa-file-pdf"></i>
                <span class="resumename">Securite</span>
                <button class="download-btn" id="download">
                    <i class="fa-solid fa-download"></i> Download
                </button>
            </div>
            <div class="pdf" name="Admin-System-Reseaux">
                <i class="fa-solid fa-file-pdf"></i>
                <span class="resumename">Admin Sys&Rss</span>
                <button class="download-btn" id="download">
                    <i class="fa-solid fa-download"></i> Download
                </button>
            </div>
            <div class="pdf" name="Reseau-Mobile">
                <i class="fa-solid fa-file-pdf"></i>
                <span class="resumename">Reseau Mobile</span>
                <button class="download-btn" id="download">
                    <i class="fa-solid fa-download"></i> Download
                </button>
            </div>
            <div class="pdf" name="Java">
                <i class="fa-solid fa-file-pdf"></i>
                <span class="resumename">Java</span>
                <button class="download-btn" id="download">
                    <i class="fa-solid fa-download"></i> Download
                </button>
            </div>
            <div class="pdf" name="SGBD">
                <i class="fa-solid fa-file-pdf"></i>
                <span class="resumename">SGBD</span>
                <button class="download-btn" id="download">
                    <i class="fa-solid fa-download"></i> Download
                </button>
            </div>
            <div class="pdf" name="DevOps">
                <i class="fa-solid fa-file-pdf"></i>
                <span class="resumename">DevOps</span>
                <button class="download-btn" id="download">
                    <i class="fa-solid fa-download"></i> Download
                </button>
            </div>
            <div class="pdf" name="Genie-Logiciel">
                <i class="fa-solid fa-file-pdf"></i>
                <span class="resumename">Genie Logiciel</span>
                <button class="download-btn" id="download">
                    <i class="fa-solid fa-download"></i> Download
                </button>
            </div>
            <div class="pdf" name="Python">
                <i class="fa-solid fa-file-pdf"></i>
                <span class="resumename">Python</span>
                <button class="download-btn" id="download">
                    <i class="fa-solid fa-download"></i> Download
                </button>
            </div>
            <div class="pdf" name="Oracle">
                <i class="fa-solid fa-file-pdf"></i>
                <span class="resumename">Oracle</span>
                <button class="download-btn" id="download">
                    <i class="fa-solid fa-download"></i> Download
                </button>
            </div>
             
            `
        }
        function References(){
            container.style.display = "flex";
            container.innerHTML = `<span style='color:gray;' id='alert'>will be add soon :)</span>`
        }
        function Archieve(){
            container.style.display = "flex";
            container.innerHTML = `<span id='arch'><a href='https://archives-supnum.free.nf'>Go to SupNum Archive</a></span>`
        }



        const navbar = document.getElementById("nav")
        const navbtn = document.getElementById("navbar")

        function showNav(){
            navbar.style.left = "0"
        }

        function closeNav(){
            navbar.style.left = "-30vh"
        }
        Main()
