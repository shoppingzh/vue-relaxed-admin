import { ref, shallowRef } from 'vue';
import { useEventListener } from '@vueuse/core';

interface UseDragOptions {
  onStart?: (e: MouseEvent) => void,
  onEnd?: () => void,
}

interface DragSession {
  x: number,
  y: number,
  movementX?: number,
  movementY?: number,
}

export default function(options?: UseDragOptions) {
  const el = shallowRef<HTMLElement | null>(null);
  const isDragging = ref(false);
  const dragSession = ref<DragSession | null>();
  
  useEventListener(el, 'mousedown', (e) => {
    isDragging.value = true;
    if (options && options.onStart) {
      options.onStart(e as MouseEvent);
    }
  });

  useEventListener('mousemove', (e: MouseEvent) => {
    if (!isDragging.value) return;
    const { clientX: x, clientY: y } = e;
    dragSession.value = {
      x,
      y,
      movementX: dragSession.value ? x - dragSession.value.x : 0,
      movementY: dragSession.value ? y - dragSession.value.y : 0,
    };
  });

  useEventListener('mouseup', () => {
    if (!isDragging.value) return;
    isDragging.value = false;
    dragSession.value = null;
    if (options && options.onEnd) {
      options.onEnd();
    }
  });

  return {
    el,
    isDragging,
    dragSession,
  };
}
