export default function hero_slider() {
    const drag_toggle = document.getElementById("hero_title");
    const back = document.querySelector(".hero_side#back");
    const front = document.querySelector(".hero_side#front");

    const update_datas = (e) => {
        let client_x;
        if (e.type === "mousemove") {
            client_x = e.clientX;
        } else {
            client_x = e.touches[0].clientX;
        }

        back.style.maxWidth = `calc(100% - ${client_x}px)`;
        front.style.maxWidth = `${client_x}px`;
        drag_toggle.style.left = `${client_x}px`;
    };

    const on_mouse_move = (e) => {
        e.preventDefault();
        document.addEventListener("mousemove", update_datas);
        console.log(e)
        if (e.type === "mousedown") {
            document.addEventListener("mouseup", handle_mouse_up);
        }
        if (e.type === "touchmove") {
            document.addEventListener("touchend", handle_mouse_up);
        }
    };

    const handle_mouse_up = (e) => {
        if (e.type === "touchend") {
            document.removeEventListener("touchmove", update_datas);
            document.removeEventListener("touchend", on_mouse_down);
        }
        if (e.type === "mouseup") {
            document.removeEventListener("mousemove", update_datas);
            document.removeEventListener("mouseup", on_mouse_down);
        }
    };

    const on_touch_move = (e) => {
        e.preventDefault();
        document.addEventListener("touchmove", update_datas);
        document.addEventListener("touchend", handle_mouse_up);
    };

    const on_mouse_down = (e) => {
        e.preventDefault();
        if (e.type === "mousedown") {
            on_mouse_move(e);
        }
        if (e.type === "touchstart") {
            on_touch_move(e);
        }
    };

    drag_toggle.addEventListener("mousedown", on_mouse_down);
    drag_toggle.addEventListener("touchstart", on_mouse_down);
}
