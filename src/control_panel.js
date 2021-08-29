class ControlPanel{
    constructor(editor){
        this.editor = editor;
        this.toolbar = this.makeToolbar();
        this.addButtons();
    }

    makeToolbar(){
        toolbar = document.createElement("div");
        toolbar.setAttribute("class", "toolbar");
        return toolbar
    }

    addButtons(){
        var pointer_button = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        pointer_button.setAttribute('class', 'active tool');
        pointer_button.setAttribute('data-tool', 'pointer');
        pointer_button.setAttribute('version', '1.1');
        pointer_button.setAttribute('width', '32');
        pointer_button.setAttribute('height', '32');
        pointer_button.setAttribute('viewBox', '0 0 128 128');
        pointer_button.innerHTML += pointer;
        pointer_button.addEventListener('click', this.choose_pointer.bind(this), false)

        var add_node_button = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        add_node_button.setAttribute('class', 'tool');
        add_node_button.setAttribute('data-tool', 'add_node');
        add_node_button.setAttribute('version', '1.1');
        add_node_button.setAttribute('width', '32');
        add_node_button.setAttribute('height', '32');
        add_node_button.setAttribute('viewBox', '0 0 128 128');
        add_node_button.innerHTML += add_node;
        add_node_button.addEventListener('click', this.chose_node_spawner.bind(this), false)

        var add_link_button = document.createElementNS("http://www.w3.org/2000/svg", "svg")
        add_link_button.setAttribute('class', 'tool');
        add_link_button.setAttribute('data-tool', 'add_link');
        add_link_button.setAttribute('version', '1.1');
        add_link_button.setAttribute('width', '32');
        add_link_button.setAttribute('height', '32');
        add_link_button.setAttribute('viewBox', '0 0 128 128');
        add_link_button.innerHTML += add_link;
        add_link_button.addEventListener('click', this.chose_link_spawner.bind(this), false)

        this.toolbar.appendChild(pointer_button);
        this.toolbar.appendChild(add_node_button);
        this.toolbar.appendChild(add_link_button);

    }

    choose_pointer(event){
        this.editor.state.currentTool = "selection"
    }

    chose_node_spawner(event){
        this.editor.state.currentTool = "add_node"
    }

    chose_link_spawner(event){
        this.editor.state.currentTool = "add_link"
    }

    getView(){
        return toolbar;
    }
}