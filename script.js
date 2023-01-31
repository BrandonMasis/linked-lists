const nodeFactory = (content) => {
  const value = content || null;
  const nextNode = null;

  return { value, nextNode };
};

const linkedListFactory = () => {
  let length = 0;
  let headPointer = {};
  let tailPointer = {};

  const append = (value) => {
    let newNode = nodeFactory(value);
    let temp = {};

    if (length == 0) {
      headPointer.value = value;
      headPointer.nextNode = null;
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
      headPointer.value = value;
      headPointer.nextNode = null;
      tailPointer = headPointer;
    } else {
      temp = tailPointer;
      tailPointer = newNode;
      temp.nextNode = tailPointer;
    }

    length++;
  };

  const size = () => {
    return length;
  };

  const head = () => {
    return headPointer;
  };

  const tail = () => {
    return tailPointer;
  };

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
    let temp = headPointer;
    let count = 0;
    let arr = [];

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

    if (arr.length == 0) {
      return null;
    } else {
      return arr;
    }
  };

  const toString = () => {
    let temp = headPointer;
    let result = '';

    for (let i = 0; i < length; i++) {
      if (length == 0) {
        result = `null`;
      }

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

    return result;
  };

  const insertAt = (value, index) => {
    if (index > length) {
      return `invalid index must be between 0 and ${size()}`;
    } else if (index == 0) {
      append(value);
    } else {
      let previous = at(index - 1);
      let temp = at(index);
      let newNode = nodeFactory(value);

      previous.nextNode = newNode;
      newNode.nextNode = temp;
    }

    length++;
  };

  const removeAt = (index) => {
    if (index > length) {
      return `invalid index must be between 0 and ${size()}`;
    }

    let previous;
    let post;

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
    headPointer,
    tailPointer,
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

LinkedList.append(1);
LinkedList.append(873);
LinkedList.append(123);
LinkedList.append(123);
LinkedList.append(12);
LinkedList.prepend(9923);
LinkedList.append(123);
LinkedList.append(821);
LinkedList.append(13);
