app.component("menu-bar", {
    template:
        /*html*/
        `
     <nav>
        <div class="font-mono max-w-7xl mx-auto my-6">
            <div class="flex justify-around">
                <div class="space-x-4">
                    <a href="./about-me.html" class="bg-gray-200 p-4 border-4 border-black">Über mich</a>
                    <a href="./cube.html" class="bg-gray-200 p-4 border-4 border-black">Würfel</a>
                </div>
                <div class="space-x-4">
                    <a href="#" class="bg-gray-200 p-4 border-4 border-black">Login</a>
                    <a href="#" class="bg-gray-200 p-4 border-4 border-black">SignUp</a>
                </div>
            </div>
        </div>
    </nav>
        `
})