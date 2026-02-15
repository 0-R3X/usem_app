import pandas as pd
import matplotlib.pyplot as plt

# ===============================
# Load data
# ===============================
df = pd.read_excel("transactions_full.xlsx")

# ===============================
# Detect description column
# ===============================
possible_desc_cols = ["Description", "Raw_Description", "Narration", "Details"]

desc_col = None
for c in possible_desc_cols:
    if c in df.columns:
        desc_col = c
        break

if desc_col is None:
    raise ValueError("No description column found!")

df["DESC"] = df[desc_col].fillna("").str.upper()

# ===============================
# Signed amount (DR +, CR -)
# ===============================
df["Signed_Amount"] = df.apply(
    lambda r: r["Amount"] if r["Transaction_Type"] == "DR" else -r["Amount"],
    axis=1
)

# ===============================
# Categorization
# ===============================
def categorize(desc):
    if any(k in desc for k in ["ZOMATO", "DOMINOS", "BLINKIT", "ETERNAL"]):
        return "Food"
    if "RAPIDO" in desc:
        return "Travel"
    if "MYNTRA" in desc:
        return "Shopping"
    if "AIRTEL" in desc:
        return "Recharge"
    if "PAYBACK" in desc:
        return "PayBack"
    if "UPI" in desc or "IMPS" in desc:
        return "Transfers"
    return "Other"

df["Category"] = df["DESC"].apply(categorize)

# ===============================
# Expense-only rows
# ===============================
expense_df = df[df["Signed_Amount"] > 0]

# ===============================
# Summary
# ===============================
summary = (
    expense_df
    .groupby("Category")["Signed_Amount"]
    .sum()
    .sort_values(ascending=False)
    .reset_index()
)

total_expense = summary["Signed_Amount"].sum()
summary["Percentage"] = summary["Signed_Amount"] / total_expense * 100

print("\n===== CATEGORY SUMMARY =====")
print(summary)
print(f"\nTOTAL EXPENSE: INR {total_expense:,.2f}")

# ===============================
# Charts
# ===============================

# Bar chart
plt.figure()
plt.bar(summary["Category"], summary["Signed_Amount"])
plt.title("Expenses by Category")
plt.ylabel("Amount (INR)")
plt.xticks(rotation=30)
plt.tight_layout()
plt.show()

# Pie chart
plt.figure()
plt.pie(
    summary["Signed_Amount"],
    labels=summary["Category"],
    autopct="%1.1f%%"
)
plt.title("Expense Distribution")
plt.tight_layout()
plt.show()

# Line chart (daily expenses)
daily = (
    expense_df
    .groupby(pd.to_datetime(df["Date"], errors="coerce"))["Signed_Amount"]
    .sum()
)

plt.figure()
plt.plot(daily.index, daily.values, marker="o")
plt.title("Daily Expense Trend")
plt.xlabel("Date")
plt.ylabel("Amount (INR)")
plt.xticks(rotation=45)
plt.tight_layout()
plt.show()

# ===============================
# Save outputs
# ===============================
df.to_excel("transactions_analyzed.xlsx", index=False)
summary.to_excel("expense_summary.xlsx", index=False)
