class CreateAccounts < ActiveRecord::Migration[5.0]
  def change
    create_table :accounts do |t|
      t.string :account_id
      t.string :name
      t.text :details
      t.float :initial_amount

      t.timestamps
    end
  end
end
