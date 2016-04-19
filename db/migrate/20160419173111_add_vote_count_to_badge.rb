class AddVoteCountToBadge < ActiveRecord::Migration
  def change
    add_column :badges, :vote_count, :integer
  end
end
