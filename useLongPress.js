import { useEffect, useState } from 'react';
import { fromEvent, of } from 'rxjs';
import { mergeMap, takeUntil, delay } from 'rxjs/operators';

const useLongPress = (target, callback, timeout) => {
  const [debounceTime] = useState(timeout || 1500);

  useEffect(() => {
    const targetNode = document.querySelector(target);
    if (targetNode) {
      const mouseDown$ = fromEvent(targetNode, `mousedown`);
      const mouseUp$ = fromEvent(targetNode, `mouseup`);
      const longpress$ = mouseDown$.pipe(
        mergeMap(e =>
          of(e).pipe(
            delay(debounceTime),
            takeUntil(mouseUp$),
          ),
        ),
      );
      longpress$.subscribe(event => {
        callback(event);
      });
    }
  }, [target]);
};

export default useLongPress;
