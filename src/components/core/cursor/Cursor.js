import { getAngle, getSqueeze } from "../../../utils/helpers/math.helpers";

const Cursor = () => {
  const cursor = document.querySelector('#cursor');
  const cursorCircle = cursor.querySelector('.cursor__circle');
  const cursorModifiers = document.querySelectorAll('[cursor-class]');
  const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates
  const pos = { x: 0, y: 0 }; // cursor's coordinates
  const speed = 0.1; // between 0 and 1

  const updateCoordinates = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };

  const updateCursor = () => {
    const diffX = Math.round(mouse.x - pos.x);
    const diffY = Math.round(mouse.y - pos.y);

    pos.x += diffX * speed;
    pos.y += diffY * speed;

    const angle = getAngle(diffX, diffY);
    const squeeze = getSqueeze(diffX, diffY);

    const scale = 'scale(' + (1 + squeeze) + ', ' + (1 - squeeze) + ')';
    const rotate = 'rotate(' + angle + 'deg)';
    const translate = 'translate3d(' + pos.x + 'px ,' + pos.y + 'px, 0)';

    cursor.style.transform = translate;
    cursorCircle.style.transform = rotate + scale;
  };

  const loop = () => {
    updateCursor();
    requestAnimationFrame(loop);
  };

  const handleCursorModifiers = () => {
    cursorModifiers.forEach((cursorModifier) => {
      cursorModifier.addEventListener('mouseenter', function () {
        const className = this.getAttribute('cursor-class');
        cursor.classList.add(className);
      });

      cursorModifier.addEventListener('mouseleave', function () {
        const className = this.getAttribute('cursor-class');
        cursor.classList.remove(className);
      });
    });
  };

  window.addEventListener('mousemove', updateCoordinates);
  loop();
  handleCursorModifiers();
};

export default Cursor;
