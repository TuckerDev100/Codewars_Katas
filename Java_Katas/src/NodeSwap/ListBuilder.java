package NodeSwap;

public class ListBuilder {
        private Node head = null, last = null;

        public ListBuilder withValue(String value) {
            if (head == null) {
                head = new Node(value);
                last = head;
            } else {
                last.next = new Node(value);
                last = last.next;
            }
            return this;
        }

        public Node build() {
            return head;
        }
    }