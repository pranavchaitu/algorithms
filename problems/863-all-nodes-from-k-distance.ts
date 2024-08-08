class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

const distanceK = (root: TreeNode | null, target: TreeNode | null, k: number): number[] => {
    if (!root || !target) return [];

    const buildParentMap = (node: TreeNode | null, parent: TreeNode | null, map: Map<TreeNode, TreeNode | null>): void => {
        if (!node) return;
        map.set(node, parent);
        buildParentMap(node.left, node, map);
        buildParentMap(node.right, node, map);
    };

    const bfs = (start: TreeNode | null, k: number, map: Map<TreeNode, TreeNode | null>): number[] => {
        const queue: (TreeNode | null)[] = [start];
        const visited: Set<TreeNode | null> = new Set([start]);
        let distance = 0;

        while (queue.length > 0) {
            if (distance === k) {
                return queue.filter(node => node !== null).map(node => node!.val);
            }

            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const node = queue.shift();
                if (node) {
                    [node.left, node.right, map.get(node)].forEach(neighbor => {
                        if (neighbor && !visited.has(neighbor)) {
                            visited.add(neighbor);
                            queue.push(neighbor);
                        }
                    });
                }
            }

            distance++;
        }

        return [];
    };

    const parentMap: Map<TreeNode, TreeNode | null> = new Map();
    buildParentMap(root, null, parentMap);

    return bfs(target, k, parentMap);
};


