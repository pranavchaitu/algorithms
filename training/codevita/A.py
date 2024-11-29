import numpy as np

def normalize_polygon(vertices):
    vertices = np.array(vertices)
    centroid = vertices.mean(axis=0)
    normalized = vertices - centroid
    
    sorted_vertices = sorted(normalized, key=lambda p: (np.arctan2(p[1], p[0]), np.linalg.norm(p)))
    return np.array(sorted_vertices)

def rotate_polygon(vertices):
    rotated_versions = []
    n = len(vertices)
    for i in range(n):
        rotated_versions.append(np.roll(vertices, i, axis=0))
    return rotated_versions

def are_same_polygon(poly1, poly2):
    norm_poly1 = normalize_polygon(poly1)
    norm_poly2 = normalize_polygon(poly2)

    rotated_versions = rotate_polygon(norm_poly2)
    for rotated in rotated_versions:
        if np.allclose(rotated, norm_poly1):
            return True
    return False

N = int(input())  
polygons = []

for _ in range(N):
    K = int(input())
    vertices = []
    for _ in range(K):
        x, y = map(int, input().split())
        vertices.append((x, y))
    polygons.append(vertices)

print(polygons)
for i in range(N):
    for j in range(i + 1, N):
        if are_same_polygon(polygons[i], polygons[j]):
            print(i + 1, j + 1)
            break
