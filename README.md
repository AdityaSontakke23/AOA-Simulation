# All Pair Shortest Path Algorithm Simulation

This project is a web-based simulation of the **Floyd-Warshall Algorithm**, used to find the shortest paths between all pairs of nodes in a weighted graph. 

---

## 🔹 Group Members

| Name               | Roll Number     |
|--------------------|-----------------|
| Aaditya Singh      | 16010123002     |
| Aayush Hardas      | 16010123013     |
| Aditya Sontakke    | 16010123022     |

---

## 🔹 How to Run

1. Clone or download the repository.
2. Run the `index.html` in vs code (no server required).
3. Use the input section to enter the number of nodes and their distance matrix.
4. Click **Start Simulation** to begin.
5. Use **Next Step** to proceed through each step of the Floyd-Warshall algorithm.
6. Use **Reset** to start again with a new input.

---

## 🔹 File Structure

| File Name     | Description                                 |
|---------------|---------------------------------------------|
| `index.html`  | Main file to launch in the browser          |
| `style.css`   | Contains styles for layout and visuals      |
| `script.js`   | Logic for simulation and step-wise control  |

---

## 🔹 Example Input

Suppose you have 4 nodes and want to simulate the following distance matrix:

|     | 1 | 2 | 3 | 4 |
|-----|---|---|---|---|
| 1   | 0 | 3 | ∞ | 7 |
| 2   | 8 | 0 | 2 | ∞ |
| 3   | 5 | ∞ | 0 | 1 |
| 4   | 2 | ∞ | ∞ | 0 |

- Represent ∞ (infinity) as `INF` or leave the input field blank (depending on implementation).
- After completing the simulation, the output matrix should show the shortest distances between all pairs.

---

## 🔹 Expected Output

The final matrix (after running all steps) should look like:

|     | 1 | 2 | 3 | 4 |
|-----|---|---|---|---|
| 1   | 0 | 3 | 5 | 6 |
| 2   | 5 | 0 | 2 | 3 |
| 3   | 3 | 6 | 0 | 1 |
| 4   | 2 | 5 | 7 | 0 |

---

## 🔹 Technologies Used

- HTML5 
- CSS3 
- Vanilla JavaScript

---

## 📌 Notes

- Input values must be non-negative integers or left blank for infinite distance.
- Minimum of 2 nodes and maximum of 10 nodes allowed.

---

