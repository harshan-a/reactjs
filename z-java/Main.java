/*
public class Main {
  public static String main(String args[]) {
    HelloWorld ob = new HelloWorld();
    ob.add(1, 2);
  }
}

class HelloWorld {

  static String Gang = "hello";

  static int num = 1;
  public void add(int a, int b) {

    long age = 11112_222L;
    double f = 1 + age;
    float div = 1.0f / 3;
    boolean boo = 1 <= 1;
    // long herAge = age;
    // herAge = 12;
    // System.out.println(a + b);
    // System.out.println(age);
    // System.out.println(herAge);

    System.out.println(div);
    System.out.println(f);
    System.out.println(boo);
    System.out.println(Gang);
  }
}

class Main {
  public static void main(String args[]) {
    byte age = 30;
    final int ROLL_NO = 044;
    System.out.println(ROLL_NO);
    float random = (float)Math.random();
    boolean isTrue = true;
    System.out.println(isTrue);

    // int is = (int)isTrue;
    // System.out.println(is);

    char ch = 'a';
    System.out.println(ch);

    int ascii = (int)ch;
    System.out.println(ascii);

    System.out.println(random);
    
    System.out.println(age);
    // System.out.println("Hello, World!!!");
  }
}

import java.util.Scanner;
// import java.util.Arrays;
import java.text.NumberFormat;
// NumberFormat class is an  abstract class used for format the number as currency or percent using NumberFormat.getCurrencyInstance().format(-number-) and NumberFormat.getPercentInstance().format(-number-)

class MortgageCalculator {
  public static final byte MONTHS_OF_YEAR = 12;
  public static final byte PERCENT = 100;
  public static void main(String args[]) {
    Scanner sc = new Scanner(System.in);

    System.out.print("Principal: ");
    int principal = sc.nextInt();

    System.out.print("Annual Interst Rate: ");
    float annualInterstRate = sc.nextFloat();

    System.out.print("Period (Year): ");
    byte period = sc.nextByte();
    sc.close();

    double monthlyInterst = (annualInterstRate / PERCENT) / MONTHS_OF_YEAR;
    int numberOfPayments = period * MONTHS_OF_YEAR;

    double onePlusRPowN = Math.pow((1 + monthlyInterst), numberOfPayments);
    double montgage = principal * ((monthlyInterst * onePlusRPowN) / (onePlusRPowN - 1));

    // System.out.println("Principal is " + principal);
    // System.out.println("Annual Interst Rate is " + annualInterstRate);
    // System.out.println("Period (Year) is " + period);
    // System.out.println("monthlyInterst " + monthlyInterst);
    // System.out.println("numberOfPayments " + numberOfPayments);
    System.out.println("Montgage: " + NumberFormat.getCurrencyInstance().format(montgage));
    // float f = sc.nextFloat();
    // Utils utils = new Utils();
    // utils.formatMoney(f, 2);
  }
}

class Utils {
  public String formatMoney(double amount, int toFixed) {
    System.out.println(amount);
    String amtString = String.format("%." + toFixed + "f", amount);
    // String[] amtArray = amtString.split("\\.");
    // // if(amtArray.length > 2) return false;
    // if(amtArray[1].length() > toFixed) {
    //   char toFixedNum = amtArray[1].charAt(toFixed);
    //   System.out.println(toFixedNum);
    //   amtArray[1] = toFixedNum - '0' >= 5 
    //                   ? amtArray[1].substring(0, toFixed - 1) + (amtArray[1].charAt(toFixed - 1) - '0' + 1 + "")
    //                   : amtArray[1].substring(0, toFixed);
    // }



    
    System.out.println(amtString);
    System.out.println();

    return amtString;
  }
}
*/



import java.util.Arrays;
// import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Stack;
import java.util.Queue;
import java.util.ArrayDeque;
import java.util.PriorityQueue;
import java.util.Map;
import java.util.HashMap;
import java.util.Set;
import java.util.HashSet;
import java.util.EmptyStackException;
import java.util.function.BiFunction;
import java.util.NoSuchElementException;

class Main {

  public static void main(String args[]) {
    // char ch = 'a';
    // int num = ch; // implicit casting;
    // char ch2 = (char) num; // explicit casting
    // System.out.println();
    // System.out.println(num);
    // System.out.println(ch2);
    // char num = 9000;
    // char ch3 = num;
    // System.out.println();
    // System.out.println(ch3);

    // var arrayList = new ArrayList<>();
    // arrayList.add(12);
    // arrayList.add("hello");
    // System.out.println(arrayList);
    // var hello = arrayList.get(1);
    // System.out.println(hello);
    
    // var linkedList = new LinkedList<>();
    // linkedList.add("helo");
    // linkedList.addLast("hello");
    // // add() and addLast() are same but add() returns boolean(true), addLast() return nothing(void);
    // var list = linkedList.reversed();
    // System.out.println(linkedList);
    // System.out.println(list);

    // Queue<Integer> queue = new ArrayDeque<>();
    // queue.add(10);
    // queue.add(20);
    // queue.add(30);
    // queue.add(40);
    // var item = queue.remove();
    // System.out.println();
    // System.out.println(item);
    // System.out.println(queue);
    // System.out.println(queue.size());
    // System.out.println(queue.isEmpty());
    // System.out.println(queue.peek());
    // System.out.println(queue.element());
    // System.out.println(queue);
    // reverseQueue(queue);
    // System.out.println(queue);

    // PriorityQueue<Integer> queue = new PriorityQueue<>();
    // queue.add(30);
    // queue.add(50);
    // queue.add(20);
    // queue.add(10);
    // queue.remove();
    // // System.out.println();
    // System.out.println(queue);
    // while(!queue.isEmpty()) 
    //   System.out.println(queue.remove());

    // Map<Integer, String> map = new HashMap<>();
    // map.put(1, "hello");
    // map.put(2, "world");
    // map.put(3, "welcome");
    // System.out.println(map.get(1));
    // map.containsKey(1); // O(1)
    // map.containsValue("welcome"); // O(n)
    // System.out.println(map.entrySet());
    // System.out.println(map.keySet());



    // System.out.println();
    // System.out.println(findFirstNonRepeatedChar("a ggrreenn applle"));
    // System.out.println(findFirstRepeatedChar("green apple"));

    // Array list = new Array(3);
    // list.insert(10);
    // list.insert(20);
    // list.insert(30);
    // list.insert(40);
    // list.remove(1);
    // list.print();

    // LinkedListOwn linkedListOwn = new LinkedListOwn();
    // // linkedListOwn.addFirst(10);
    // // linkedListOwn.addFirst(20);
    // // linkedListOwn.addFirst(30);
    // // linkedListOwn.addFirst(40);
    // // linkedListOwn.addFirst(10);
    // linkedListOwn.addLast(10);
    // linkedListOwn.addLast(20);
    // linkedListOwn.addLast(30);
    // linkedListOwn.addLast(40);
    // // linkedListOwn.deleteFirst();
    // // linkedListOwn.deleteLast();
    // System.out.println(linkedListOwn.contains(100));
    // System.out.println(linkedListOwn.indexOf(10));
    // System.out.println(linkedListOwn.size());
    // int[] array = linkedListOwn.toArray();
    // System.out.println(Arrays.toString(array));
    // // linkedListOwn.reverseLinear();
    // // int[] arrayReversed = linkedListOwn.toArray();
    // // System.out.println(Arrays.toString(arrayReversed));
    // System.out.println(linkedListOwn.getKthFromTheEnd(4));
    // // linkedListOwn.print();

    // StringHandler handler = new StringHandler();
    // // var reverse = handler.reverse("(hello)");
    // System.out.println();
    // // System.out.println(reverse);
    // System.out.println(handler.checkSyntax("hello(()"));

    // var stack = new StackOwn();
    // stack.push(10);
    // stack.push(20);
    // stack.push(30);
    // stack.push(40);
    // stack.push(50);
    // stack.push(60);
    // stack.push(70);
    // stack.push(80);
    // stack.push(90);
    // stack.push(100);
    // System.out.println();
    // stack.print();
    // System.out.println(stack.peek());
    // System.out.println(stack.pop());
    // stack.print();
    // System.out.println(stack);

    // ArrayQueue arrayQueue = new ArrayQueue(5);
    // arrayQueue.enqueue(10);
    // arrayQueue.enqueue(20);
    // arrayQueue.enqueue(30);
    // arrayQueue.enqueue(40);
    // arrayQueue.enqueue(50);
    // // arrayQueue.enqueue(110);
    // // arrayQueue.enqueue(120);
    // var item1 = arrayQueue.dequeue();
    // var item2 = arrayQueue.dequeue();
    // var item3 = arrayQueue.dequeue();
    // var item4 = arrayQueue.dequeue();
    // var item5 = arrayQueue.dequeue();
    // arrayQueue.enqueue(60);
    // arrayQueue.enqueue(70);
    // arrayQueue.enqueue(80);
    // arrayQueue.enqueue(90);
    // arrayQueue.enqueue(100);
    // System.out.println();
    // // System.out.println("" + item1 + item2 + item3);
    // System.out.println(arrayQueue);
    // System.out.println(arrayQueue.isFull());

    // StackQueue stackQueue = new StackQueue();
    // stackQueue.enqueue(10);
    // stackQueue.enqueue(20);
    // stackQueue.enqueue(30);
    // var item = stackQueue.dequeue();
    // System.out.println();
    // System.out.println(item);

    // PriorityQueueUsingArray priorityQueue = new PriorityQueueUsingArray(5);
    // priorityQueue.insert(10);
    // priorityQueue.insert(30);
    // priorityQueue.insert(50);
    // priorityQueue.insert(20);
    // priorityQueue.insert(40);
    // // var item = priorityQueue.remove();
    // // System.out.println(item);
    // System.out.println(priorityQueue);
    // while(!priorityQueue.isEmpty()) 
    //   System.out.println(priorityQueue.remove());
    
    // var hashMap = new HashTable();
    // System.out.println();
    // hashMap.put(0, "Harshan");
    // hashMap.put(0, "Harsha");
    // hashMap.put(10, "Harshan");
    // hashMap.put(1, "Harsh");
    // hashMap.put(2, "Hars");
    // hashMap.put(3, "H");
    // hashMap.put(3023435, "H");
    // System.out.println(hashMap.get(1));
    // hashMap.remove(1);
    // hashMap.print();
    // System.out.println(hashMap);


  }
  
  public static void reverseQueue(Queue<Integer> queue) {
    Stack<Integer> stack = new Stack<>();
    while (!queue.isEmpty())
      stack.push(queue.remove());

    while (!stack.isEmpty())
      queue.add(stack.pop());

  }

  public static char findFirstNonRepeatedChar(String str) {
    Map<Character, Integer> map = new HashMap<>();

    var chars = str.toCharArray();

    for (char ch : chars) {
      var count = map.containsKey(ch) ? map.get(ch) : 0;
      map.put(ch, count + 1);
    }

    for (char ch : chars)
      if (map.get(ch) == 1)
        return ch;

    return 0;
  }
  
  public static char findFirstRepeatedChar(String str) {
    // Set<Character> set = new HashSet<>();
    // for(char ch : str.toCharArray()) {
    //   if(set.contains(ch))
    //     return ch;
    //   set.add(ch);
    // }
    Map<Character, Integer> map = new HashMap<>();

    var chars = str.toCharArray();
    for (char ch : chars) {

      var count = map.containsKey(ch) ? map.get(ch) : 0;
      map.put(ch, count + 1);
    }
    for (char ch : chars)
      if (map.get(ch) > 1)
        return ch;

    return 0;
  }
}

class Array {
  private int[] items;
  private int count;

  public Array(int length) {
    // java add "this" keyword to the items below(java implicitly add the "this" keyword when needed);
    // this keyword is required when the method parameter and the field have the same name;
    items = new int[length];
  }

  // public static void main(String args[]) {
  //   insert(2);
  // }
  // When the jvm loads the class, it first allocate a memory for all the static member. When you create an object using the new keyword, the JVM allocates memory on the heap for that specific object. This memory holds all the object's instance variables and methods.   
  // static methods don't have "this" reference bcoz it isn't associated with any object. However the non-static methods tied with object, so "this" reference to the object;
  public void insert(int item) {
    if (items.length == count) {
      int[] newArray = new int[count * 2];

      for (int i = 0; i < count; i++) {
        newArray[i] = items[i];
      }
      items = newArray;
    }

    items[count++] = item;
  }

  public void remove(int index) {
    if (index < 0 || index >= count)
      throw new IllegalArgumentException();

    for (int i = index; i < count; i++)
      items[i] = items[i + 1];

    count--;
  }

  public void print() {
    for (int i = 0; i < count; i++)
      System.out.println(items[i]);
  }
}

class LinkedListOwn {

  private class Node {
    private int value;
    private Node next;
    
    private Node(int value) {
      this.value = value;
      next = null;
    }
  }
  
  private int size;
  private Node first; // null initially; 
  private Node last; // null initially;
  //   1. Instance Variables (Fields of a Class) and Static Variables:
  // These variables are automatically initialized with default entries based on their data type:
  // Numeric types (byte, short, int, long, float, double): Initialized to 0 (or 0.0 for floating-point types).
  // boolean: Initialized to false.
  // char: Initialized to the null character \u0000.
  // Reference types (objects, including String): Initialized to null.
  // 2. Local Variables (Variables within a Method or Block):
  // Local variables do not receive default values. If a local variable is declared but not initialized, attempting to use it before assigning a value will result in a compile-time error. The Java compiler enforces a "definite assignment" rule, ensuring that local variables are assigned a value before they are accessed.

  private boolean isEmpty() {
    return first == null;
  }

  private Node getPrevious(Node node) {
    Node current = first;
    while (current != null) {
      if (current.next == node)
        return current;
      current = current.next;
    }
    return current;
  }

  public void addFirst(int data) {
    Node newNode = new Node(data);
    if (isEmpty())
      first = last = newNode;
    else {
      newNode.next = first;
      first = newNode;
    }
    size++;
  }

  public void addLast(int data) {
    Node newNode = new Node(data);
    if (isEmpty())
      first = last = newNode;
    else {
      last.next = newNode;
      last = newNode;
    }
    size++;
    // if (last == null) {
    //   Node lastNode = first;
    //   while (lastNode.next != null)
    //     lastNode = lastNode.next;
    //   lastNode.next = newNode;
    //   last = newNode;
    // } else {
    //   last.next = newNode;
    //   last = newNode;
    // }
  }

  public void deleteFirst() {
    if(isEmpty())
      throw new NoSuchElementException();

    if(first == last) {
      first = last = null;
      
    } else {
      var second = first.next;
      first.next = null;
      first = second;
    }
    size--;
  }

  public void deleteLast() {
    if(isEmpty())
      throw new NoSuchElementException();

    if (first == last) 
      first = last = null;
      
    else {
      Node previousNode = getPrevious(last);
      last = previousNode;
      last.next = null;
    }
    size--;

  }
  
  public boolean contains(int data) {
    // Node node = first;
    // while (node != null) {
    //   if (node.value == data)
    //     return true;
    //   node = node.next;
    // }
    return indexOf(data) != -1;
  }
  
  public int indexOf(int data) {
    Node node = first;
    int index = 0;
    while (node != null) {
      if (node.value == data)
        return index;
      node = node.next;
      index++;
    }
    return -1;
  }
  
  public int size() { return size; }

  public int[] toArray() {
    int[] array = new int[size];
    Node current = first;
    int index = 0;
    while (current != null) {
      array[index++] = current.value;
      current = current.next;
    }
    return array;
  }

  public void reverseQuadratic() { // O(n^2)
    if (isEmpty())
      return;

    // Node current = first;
    Node current = last;

    while (current != first && current != null) {
      // System.out.println(current.value);
      // System.out.println(current);
      // current = current.next;

      // System.out.println(current.value);
      Node previous = getPrevious(current);
      current.next = previous;
      current = previous;
    }
    first = last;
    current.next = null;
    last = current;
  }
  
  public void reverseLinear() { // O(n)
    if (isEmpty())
      return;

    Node previous = first;
    Node current = previous.next;
    while (current != null) {
      Node next = current.next;
      current.next = previous;
      previous = current;
      current = next;
    }

    last = first;
    last.next = null;
    first = previous;
  }

  public int getKthFromTheEnd(int k) {
    if (isEmpty()) {
      throw new IllegalStateException();
    }
    Node a = first;
    Node b = first;

    for (int i = 0; i < k - 1; i++) {
      b = b.next;
      if (b == null) {
        throw new IllegalArgumentException();
      }
    }
    
    while (b != last) {
      a = a.next;
      b = b.next;
    }

    return a.value;
  }

  public void print() {
    Node tempNode = first;
    while (tempNode != null) {
      System.out.println(tempNode.value);
      tempNode = tempNode.next;
    }
  }
}

class StringHandler {
  public String reverse(String input) {
    Stack<Character> stack = new Stack<>();

    for (char ch : input.toCharArray()) {
      stack.push(ch);
    }

    // string are immutable means it cannot be alter after it created in memory, so each time we modifies in code it will create new string object in memory;
    // in this case below for each iteration new string object is created in memory;
    // String reverse = "";
    // while (!stack.empty())
    //   reverse += stack.pop();

    StringBuffer reverse = new StringBuffer();
    while (!stack.empty())
      reverse.append(stack.pop());

    return reverse.toString();
  }

  public boolean checkSyntax(String input) {
    // var openBrackets = new ArrayList<Character>(3);
    // openBrackets.add('(');
    // openBrackets.add('[');
    // openBrackets.add('{');
    // openBrackets.add('<');
    // var closeBrackets = new ArrayList<Character>(3);
    // closeBrackets.add(')');
    // closeBrackets.add(']');
    // closeBrackets.add('}');
    // closeBrackets.add('>');

    final var openBrackets = Arrays.asList('(', '[', '{', '<');
    final var closeBrackets = Arrays.asList(')', ']', '}', '>');

    Stack<Character> stack = new Stack<>();
    for (char ch : input.toCharArray()) {
      if (openBrackets.contains(ch)) 
        stack.push(ch);
      
      else if (closeBrackets.contains(ch)) {
        if (stack.empty() || openBrackets.indexOf(stack.peek()) != closeBrackets.indexOf(ch))
          return false;
          
        stack.pop();
      }
    }
    return stack.empty();
  }
  
}

class StackOwn {

  private int[] items = new int[10];
  private int size;

  public void push(int item) {
    if (items.length == size) {
      int[] newItems = new int[size * 2];
      for (int i = 0; i < size; i++) {
        newItems[i] = items[i];
      }
      items = newItems;
    }

    items[size++] = item;
  }

  public int pop() {
    if (isEmpty())
      throw new EmptyStackException();

    return items[--size];
    // int lastItem = items[size - 1];
    // if (items.length == size)
    //   items[size - 1] = 0;
    // else
    //   items[size - 1] = items[size];

    // size--;
    // return lastItem;
  }
  
  public int peek() {
    if (isEmpty())
      throw new EmptyStackException();
    return items[size - 1];
  }

  public boolean isEmpty() {
    return size == 0;
  }


  public void print() {
    for (int i = 0; i < size; i++)
      System.out.print(items[i] + " ");
  }

  @Override
  public String toString() {
    return Arrays.toString(Arrays.copyOfRange(items, 0, size));
  }

}

class ArrayQueue {
  private int[] items;
  private int count;
  private int head;
  private int tail;
  
  public ArrayQueue(int size) {
    items = new int[size];
  }

  public void enqueue(int item) {
    if (isFull())
      throw new IllegalStateException();


    items[tail] = item;
    tail = (tail + 1) % items.length;
    count++;
  }
  
  public int dequeue() {
    if (isEmpty()) {
      throw new IllegalStateException();
    }
    var item = items[head];
    items[head] = 0;
    head = (head + 1) % items.length;
    count--;
    return item;
  }

  public int peek() {
    return items[head];
  }

  public boolean isEmpty() {
    return count == 0;
  }

  public boolean isFull() {
    return count == items.length;
  }

  @Override
  public String toString() {
    return Arrays.toString(items);
  }
}

class StackQueue {
  private Stack<Integer> stack1 = new Stack<>();
  private Stack<Integer> stack2 = new Stack<>();
  
  public void enqueue(int item) {
    stack1.push(item);
  }

  public int dequeue() {
    if (isEmpty())
      throw new IllegalStateException();

    if (stack2.isEmpty())
      moveStack1ToStack2();

    return stack2.pop();
  }

  public int peek() {
    if (isEmpty())
      throw new IllegalStateException();

    if (stack2.isEmpty())
      moveStack1ToStack2();
      
    return stack2.peek();
  }
  
  private void moveStack1ToStack2() {
    while (!stack1.isEmpty())
      stack2.push(stack1.pop());
  }
  
  public boolean isEmpty() {
    return stack1.isEmpty() && stack2.isEmpty();
  }
  
}

class PriorityQueueUsingArray {
  private int[] items;
  private int count;

  public PriorityQueueUsingArray(int size) {
    items = new int[size];
  }

  void insert(int item) {
    if (isFull()) {
      int[] newItems = new int[count * 2];
      for (int i = 0; i < count; i++)
        newItems[i] = items[i];

      items = newItems;
    }

    var i = shiftItemsToInsert(item);
    items[i] = item;
    count++;
  }
  
  private int shiftItemsToInsert(int item) {
    int i;
    for (i = count - 1; i >= 0; i--)
      if (items[i] < item)
        items[i + 1] = items[i];
      else
        break;
    
    return i + 1;
  }

  public int remove() {
    if (isEmpty())
      throw new IllegalStateException();

    return items[--count];
  }

  public boolean isEmpty() {
    return count == 0;
  }

  public boolean isFull() {
    return count == items.length;
  }

  @Override
  public String toString() {
    return Arrays.toString(items);
  }

} 

class HashTable {
  private LinkedList<Entry>[] items = new LinkedList[10];

  private class Entry {
    private int key;
    private String value;

    public Entry(int key, String value) {
      this.key = key;
      this.value = value;
    }

    @Override
    public String toString() {
      return ("{ " + key + ": " + value + " }");
    }
  }

  private int hashFunction(int key) {
    return key % items.length;
  }

  private Entry getEntry(int key) {
    var entries = getEntries(key);
    if(entries != null) 
      for (var entry : entries)
        if (entry.key == key) 
          return entry;

    return null;
  }

  private LinkedList<Entry> getEntries(int key) {
    return items[hashFunction(key)];
  }

  private LinkedList<Entry> getOrCreateEntries(int key) {
    int index = hashFunction(key);
    if(items[index] == null) 
      items[index] = new LinkedList<Entry>();

    return items[index];
  }
  
  public void put(int key, String value) {
    var entry = getEntry(key);
    if (entry != null) {
      entry.value = value;
      return;
    }

    getOrCreateEntries(key).add(new Entry(key, value));
  }

  public String get(int key) {
    var entry = getEntry(key);
    return entry == null ? null : entry.value;

    // int index = hashFunction(key);
    // var entries = items[index];

    // if (entries != null)
    //   for (Entry entry : entries)
    //     if (entry.key == key)
    //       return entry.value;

    // throw new IllegalArgumentException();
  }
  
  public void remove(int key) {
    var entry = getEntry(key);
    if (entry == null) 
      throw new IllegalStateException();
    
    getEntries(key).remove(entry);

    // int index = hashFunction(key);
    // var entries = items[index];
    
    // if (entries == null)
    //   return;

    // for (Entry entry : entries)
    //   if (entry.key == key)
    //     entries.remove(entry);
  }

  public void print() {
    for (int i = 0; i < items.length; i++) {
      var entries = items[i];

      if (entries != null && entries.size() > 0) {
        for (int j = 0; j < entries.size(); j++) {
          System.out.print("{ " + entries.get(j).key + ": " + entries.get(j).value + " }");
          if (j < entries.size() - 1)
            System.out.print(" -> ");
        }
        System.out.println();
      }
    }
  }
  
  @Override
  public String toString() {
    return Arrays.toString(items);
  }
}

