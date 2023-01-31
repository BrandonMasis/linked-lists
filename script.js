const nodeFactory = (content) => {
  const value = content || null,
    nextNode = null;
  return { value, nextNode };
};

const linkedListFactory = () => {
  let length = 0,
    headPointer = {},
    tailPointer = {};

  const append = (value) => {
    let newNode = nodeFactory(value),
      temp = {};

    if (length == 0) {
      headPointer = newNode;
      tailPointer = headPointer;
    } else {
      temp = headPointer;
      headPointer = newNode;
      headPointer.nextNode = temp;
    }

    length++;
  };

  const prepend = (value) => {
    let newNode = nodeFactory(value);

    if (length == 0) {
      headPointer = newNode;
      tailPointer = headPointer;
    } else {
      temp = tailPointer;
      tailPointer = newNode;
      temp.nextNode = tailPointer;
    }

    length++;
  };

  const size = () => length;

  const head = () => headPointer;

  const tail = () => tailPointer;

  const at = (index) => {
    let temp = headPointer;

    for (let i = 0; i < index; i++) {
      temp = temp.nextNode;
    }

    return temp;
  };

  const pop = () => {
    tailPointer = at(size() - 2);
    tailPointer.nextNode = null;

    if (length > 0) {
      length--;
    }

    if (length == 0) {
      headPointer = {};
      tailPointer = {};
    }
  };

  const contains = (value) => {
    let temp = headPointer;

    for (let i = 0; i < length; i++) {
      if (temp.value == value) {
        return true;
      } else {
        temp = temp.nextNode;
      }
    }

    return false;
  };

  const find = (value) => {
    let temp = headPointer,
      count = 0,
      arr = [];

    for (let i = 0; i < length; i++) {
      if (temp.value == value) {
        arr.push(count);
        temp = temp.nextNode;
        count++;
      } else {
        temp = temp.nextNode;
        count++;
      }
    }

    return arr.length == 0 ? null : arr;
  };

  const toString = () => {
    let temp = headPointer,
      result = '';

    for (let i = 0; i < length; i++) {
      if (length == 0) {
        result = `null`;
      }

      if (length == 1) {
        result = `(HEAD ${temp.value} TAIL) -> NULL`;
      } else {
        if (temp.nextNode) {
          if (i == 0) {
            result += `(HEAD ${temp.value}) -> `;
          } else {
            result += `(${temp.value}) -> `;
          }
          temp = temp.nextNode;
        } else {
          result += `(${temp.value} TAIL) -> NULL`;
        }
      }
    }

    return result;
  };

  const insertAt = (value, index) => {
    if (index > length) {
      return `invalid index must be between 0 and ${size()}`;
    } else if (index == 0) {
      append(value);
    } else {
      let previous = at(index - 1),
        temp = at(index),
        newNode = nodeFactory(value);

      previous.nextNode = newNode;
      newNode.nextNode = temp;
    }

    length++;
  };

  const removeAt = (index) => {
    let previous, post;

    if (index > length) {
      return `invalid index must be between 0 and ${size()}`;
    }

    if (index > 0) {
      previous = at(index - 1);
      post = at(index).nextNode;
      previous.nextNode = post;
    } else {
      headPointer = at(index + 1);
      tailPointer = headPointer;
    }

    length--;
  };

  return {
    length,
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
};

const LinkedList = linkedListFactory();

LinkedList.append(2);
LinkedList.append(2);
LinkedList.append(1232);
LinkedList.append(932);
