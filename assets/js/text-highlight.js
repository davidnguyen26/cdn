        const highlight = document.getElementById("highlight-style");
        
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.utils.toArray(".text-highlight").forEach((highlight) => {
          ScrollTrigger.create({
            trigger: highlight,
            start: "-100px center",
            onEnter: () => highlight.classList.add("active")
          });
        });
        
        const setHighlightStyle = (value) =>
          document.body.setAttribute("data-highlight", value);
        
        highlight.addEventListener("change", (e) => setHighlightStyle(e.target.value));
        
        setHighlightStyle(highlight.value);
