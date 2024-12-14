class LRUCache:

    def __init__(self, capacity: int):
        self.map = {}        

    def get(self, key: int) -> int:
        print(self.map)
        return int(self.map.get(key))

    def put(self, key: int, value: int) -> None:
        self.map[key] = value


# Your LRUCache object will be instantiated and called as such:
obj = LRUCache(2)
obj.put(1,1)
obj.put(2,2)
print((obj.get(1)))
obj.put(3,3)
print((obj.get(2)))

print(obj.map)

